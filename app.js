const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbyRbgd97mt0QWbdhq-33tBBs5TeIaLq9n_fttTUle7A79-sYweTqOa3VSTWHMEYmEvV/exec";
const SHEETS_CACHE_KEY = "klo_gym_club_sheet_items_v7";

const FALLBACK_PRODUCTS = typeof products !== "undefined" && Array.isArray(products) ? products : [];

let currentCategoryFilter = "todos";
let currentSizeFilter = "todas";
let bannerImages = ["img/Klo Logo/klo logo rosado.png"];
let bannerSlideIndex = 0;
let latestRemoteConfig = {};

function readCachedSheetData() {
  try {
    const raw = localStorage.getItem(SHEETS_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return { items: parsed, config: {} };
    }
    if (parsed && Array.isArray(parsed.items)) {
      return { items: parsed.items, config: parsed.config || {} };
    }
    return null;
  } catch (e) {
    return null;
  }
}

function writeCachedSheetData(items, config = {}) {
  try {
    localStorage.setItem(SHEETS_CACHE_KEY, JSON.stringify({ items, config }));
  } catch (e) {
    // Ignorar si el almacenamiento del navegador está bloqueado o lleno
  }
}

function normalizeImageUrl(url) {
  const clean = String(url || "").trim();
  if (!clean) return "";

  const driveFileMatch = clean.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveFileMatch[1]}`;
  }

  const driveOpenMatch = clean.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (clean.includes("drive.google.com") && driveOpenMatch && driveOpenMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveOpenMatch[1]}`;
  }

  return clean;
}

function parseCellValue(val) {
  const str = String(val ?? "").trim();
  if (str === "-" || str === "—") {
    return { isDash: true, isEmpty: false, qty: 0 };
  }
  if (str === "") {
    return { isDash: false, isEmpty: true, qty: 0 };
  }
  const n = Number(str);
  return {
    isDash: false,
    isEmpty: false,
    qty: Number.isFinite(n) && n > 0 ? n : 0
  };
}

function getRawDisponibilidad(raw) {
  if (!raw || typeof raw !== "object") return "";
  if (raw.disponibilidad !== undefined) return raw.disponibilidad;
  if (raw.estado !== undefined) return raw.estado;
  if (raw.stock_estado !== undefined) return raw.stock_estado;

  const matchedKey = Object.keys(raw).find(k => {
    const cleanKey = String(k || "").trim().toLowerCase();
    return cleanKey === "disponibilidad" || cleanKey === "estado" || cleanKey === "stock_estado";
  });

  return matchedKey ? raw[matchedKey] : "";
}

function getRawOfferPrice(raw) {
  if (!raw || typeof raw !== "object") return null;
  const offerKeys = ["oferta", "offer", "offer_price", "precio_oferta", "promo", "promocion", "promoción", "descuento"];
  for (const key of Object.keys(raw)) {
    const cleanKey = String(key || "").trim().toLowerCase();
    if (offerKeys.includes(cleanKey)) {
      const cleanedNum = String(raw[key] ?? "").replace(/[^0-9.,]/g, "").replace(",", ".");
      const num = Number(cleanedNum);
      if (Number.isFinite(num) && num > 0) {
        return num;
      }
    }
  }
  return null;
}

function normalizeSheetItem(raw) {
  const name = String(raw.name || "").trim();
  if (!name) return null;

  const color = String(raw.color || "").trim();
  const category = String(raw.category || "todos").trim().toLowerCase();
  const priceNum = Number(String(raw.price ?? 0).replace(/[^0-9.,]/g, "").replace(",", "."));
  const price = Number.isFinite(priceNum) ? priceNum : 0;
  const offerRaw = getRawOfferPrice(raw);
  const offerPrice = offerRaw !== null && offerRaw < price ? offerRaw : null;
  const isOffer = offerPrice !== null;
  const effectivePrice = isOffer ? offerPrice : price;
  const description = String(raw.description || "").trim();

  const rawImages = Array.isArray(raw.images)
    ? raw.images
    : String(raw.images || "").split(",");
  const images = rawImages.map(normalizeImageUrl).filter(Boolean);

  const sizeCols = ["XS", "S", "M", "L", "XL", "Unitalla"];
  const stock = {};
  const sizeStock = {};
  const dashMap = {};

  for (const sz of sizeCols) {
    const rawVal = raw.stock && raw.stock[sz] !== undefined ? raw.stock[sz] : raw[sz];
    const parsed = parseCellValue(rawVal);
    stock[sz] = parsed.qty;
    dashMap[sz] = parsed.isDash;
    sizeStock[sz] =
      raw.sizeStock && (raw.sizeStock[sz] === "entrega_inmediata" || raw.sizeStock[sz] === "bajo_pedido")
        ? raw.sizeStock[sz]
        : parsed.qty > 0
          ? "entrega_inmediata"
          : "bajo_pedido";
  }

  const standardCols = ["XS", "S", "M", "L", "XL"];
  const positiveStandardSizes = standardCols.filter(sz => stock[sz] > 0);
  const hasStandardStock = positiveStandardSizes.length > 0;
  const hasUnitallaStock = stock.Unitalla > 0;
  const allStandardDash = standardCols.every(sz => dashMap[sz]);
  const allSizesDash = sizeCols.every(sz => dashMap[sz]);

  // Cualquier producto que tenga stock en Unitalla (> 0) y no tenga stock en XS-XL
  // se trata como Unitalla (oculta XS-XL y muestra su disponibilidad).
  const isOnlyUnitalla =
    hasUnitallaStock &&
    !hasStandardStock;

  // Todo en "-" (o sin stock en XS-XL ni Unitalla) se trata como accesorio sin tallas
  // y muestra solo su disponibilidad.
  const noSize =
    !isOnlyUnitalla &&
    (allSizesDash || (!hasStandardStock && !hasUnitallaStock && (category.includes("accesor") || allStandardDash)));

  const rawDisponibilidad = getRawDisponibilidad(raw);
  const dispRaw = String(rawDisponibilidad ?? "").trim().toLowerCase();

  let noSizeStockType = "bajo_pedido";
  if (
    dispRaw.includes("inmediat") ||
    dispRaw.includes("entrega") ||
    dispRaw.includes("disponible") ||
    dispRaw === "si" ||
    dispRaw === "sí" ||
    dispRaw === "yes" ||
    dispRaw === "1" ||
    dispRaw === "true"
  ) {
    noSizeStockType = "entrega_inmediata";
  } else if (
    dispRaw.includes("pedido") ||
    dispRaw === "no" ||
    dispRaw === "0" ||
    dispRaw === "false"
  ) {
    noSizeStockType = "bajo_pedido";
  }

  if (isOnlyUnitalla) {
    sizeStock.Unitalla = stock.Unitalla > 0 ? "entrega_inmediata" : "bajo_pedido";
  }

  return {
    name,
    color,
    category,
    price,
    offerPrice,
    effectivePrice,
    isOffer,
    description,
    images: images.length ? images : ["img/placeholder.png"],
    stock,
    sizeStock,
    availableStandardSizes: positiveStandardSizes,
    isUnitalla: isOnlyUnitalla,
    noSize,
    noSizeStockType
  };
}

function formatCategoryLabel(catSlug) {
  const clean = String(catSlug || "").trim().toLowerCase();
  if (!clean) return "";
  if (clean === "oferta") return "Ofertas";
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getCategoryImage(catSlug, fallbackProductImg = "") {
  const clean = String(catSlug || "").trim().toLowerCase();
  const customImg = normalizeImageUrl(
    latestRemoteConfig[`cat_${clean}`] || latestRemoteConfig[`categoria_${clean}`]
  );
  if (customImg) return customImg;

  const defaultImages = {
    shorts: "img/241.png",
    tops: "img/211.png",
    leggings: "img/217.png",
    flares: "img/203.png",
    enterizos: "img/259.png",
    chaquetas: "img/29.png",
    accesorios: "img/269.png",
    joggers: "img/263.png"
  };

  if (fallbackProductImg) return fallbackProductImg;
  return defaultImages[clean] || "img/placeholder.png";
}

function syncDynamicOfferCategory() {
  const offerProducts = Array.isArray(catalogProducts)
    ? catalogProducts.filter(p => Boolean(p && p.isOffer))
    : [];
  const hasOffers = offerProducts.length > 0;

  const seenCategories = new Set();
  const dynamicCategories = [];
  const firstImageByCat = {};

  (Array.isArray(catalogProducts) ? catalogProducts : []).forEach(prod => {
    const cat = String((prod && prod.category) || "").trim().toLowerCase();
    if (!cat || cat === "todos" || cat === "oferta") return;
    if (!firstImageByCat[cat] && prod.images && prod.images[0]) {
      firstImageByCat[cat] = prod.images[0];
    }
    if (!seenCategories.has(cat)) {
      seenCategories.add(cat);
      dynamicCategories.push(cat);
    }
  });

  const baseOrder = ["shorts", "tops", "leggings", "flares", "enterizos", "chaquetas", "accesorios", "joggers"];
  const extraCategories = dynamicCategories.filter(c => !baseOrder.includes(c));
  const finalCategories = [...baseOrder, ...extraCategories];

  const catGrid = document.querySelector(".cat-grid");
  const menuList = document.querySelector("#menuDrawer > div");

  if (catGrid) {
    catGrid.querySelectorAll(".cat-box").forEach(box => {
      const catAttr = box.dataset.category;
      if (catAttr && catAttr !== "oferta" && !finalCategories.includes(catAttr)) {
        box.remove();
      }
    });

    finalCategories.forEach(cat => {
      let box = catGrid.querySelector(`.cat-box[data-category="${cat}"]`);
      const imgSrc = getCategoryImage(cat, firstImageByCat[cat] || "");
      const label = formatCategoryLabel(cat);

      if (!box) {
        box = document.createElement("div");
        box.className = "cat-box";
        box.dataset.category = cat;
        box.onclick = function () {
          filterCategory(cat, this);
        };
        box.innerHTML = `<img src="${imgSrc}" alt="${label}" loading="lazy"><span>${label}</span>`;
        catGrid.appendChild(box);
      } else {
        const imgEl = box.querySelector("img");
        const spanEl = box.querySelector("span");
        if (imgEl && imgSrc) imgEl.src = imgSrc;
        if (spanEl) spanEl.textContent = label;
      }
      box.classList.toggle("active-cat", currentCategoryFilter === cat);
    });

    if (hasOffers) {
      const offerThumb = getCategoryImage(
        "oferta",
        (offerProducts[0].images && offerProducts[0].images[0]) || "img/211.png"
      );
      let offerBox = catGrid.querySelector('.cat-box[data-category="oferta"]');
      if (!offerBox) {
        offerBox = document.createElement("div");
        offerBox.className = "cat-box";
        offerBox.dataset.category = "oferta";
        offerBox.onclick = function () {
          filterCategory("oferta", this);
        };
        offerBox.innerHTML = `<img src="${offerThumb}" alt="Ofertas" loading="lazy"><span>Ofertas</span>`;
        catGrid.prepend(offerBox);
      } else {
        const imgEl = offerBox.querySelector("img");
        if (imgEl && offerThumb) imgEl.src = offerThumb;
      }
      offerBox.classList.toggle("active-cat", currentCategoryFilter === "oferta");
    } else {
      const offerBox = catGrid.querySelector('.cat-box[data-category="oferta"]');
      if (offerBox) offerBox.remove();
    }
  }

  if (menuList) {
    const footerP = menuList.querySelector("p");
    const headerDiv = menuList.querySelector("div");

    menuList.querySelectorAll("a").forEach(a => a.remove());

    const makeNavLink = (catValue, textLabel) => {
      const link = document.createElement("a");
      link.href = "#destacados";
      link.dataset.navCategory = catValue;
      link.textContent = textLabel;
      link.onclick = function () {
        filterCategory(catValue);
        closeAll();
      };
      return link;
    };

    const insertBeforeFooter = (el) => {
      if (footerP) {
        menuList.insertBefore(el, footerP);
      } else {
        menuList.appendChild(el);
      }
    };

    insertBeforeFooter(makeNavLink("todos", "Todo el Catálogo"));
    if (hasOffers) {
      insertBeforeFooter(makeNavLink("oferta", "Ofertas"));
    }
    finalCategories.forEach(cat => {
      insertBeforeFooter(makeNavLink(cat, formatCategoryLabel(cat)));
    });

    if (headerDiv && headerDiv.parentNode !== menuList) {
      menuList.prepend(headerDiv);
    }
  }

  if (!hasOffers && currentCategoryFilter === "oferta") {
    currentCategoryFilter = "todos";
    const title = document.getElementById("catalogTitle");
    if (title) title.textContent = "Catálogo";
  }
}

function applyRemoteMediaConfig(config) {
  if (!config || typeof config !== "object") return;
  latestRemoteConfig = config;

  syncDynamicOfferCategory();

  const bannerCandidates = [
    config.banner_imagen,
    config.banner,
    config.banner_1,
    config.banner_2,
    config.banner_3
  ]
    .map(normalizeImageUrl)
    .filter(Boolean);

  if (bannerCandidates.length > 0) {
    bannerImages = bannerCandidates;
    bannerSlideIndex = 0;
    const heroImg = document.getElementById("heroBannerImg");
    const heroBanner = document.getElementById("heroBanner");
    if (heroImg) {
      if (heroBanner) heroBanner.classList.remove("banner-missing");
      heroImg.style.display = "block";
      heroImg.src = bannerImages[0];
    }
  }
}

const initialCached = readCachedSheetData();
let catalogProducts = initialCached ? initialCached.items.map(normalizeSheetItem).filter(Boolean) : [...FALLBACK_PRODUCTS];
if (initialCached && initialCached.config) {
  latestRemoteConfig = initialCached.config;
}

async function loadProductsFromSheet() {
  if (!GOOGLE_SHEETS_API_URL || GOOGLE_SHEETS_API_URL.includes("PEGA_AQUI_TU_URL")) {
    catalogProducts = [...FALLBACK_PRODUCTS];
    syncDynamicOfferCategory();
    renderCatalog(currentCategoryFilter, currentSizeFilter);
    return;
  }

  try {
    const sep = GOOGLE_SHEETS_API_URL.includes("?") ? "&" : "?";
    const res = await fetch(`${GOOGLE_SHEETS_API_URL}${sep}t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Error HTTP " + res.status);

    const data = await res.json();
    if (!data || !data.ok || !Array.isArray(data.items)) {
      throw new Error("Respuesta inválida del Apps Script");
    }

    const sheetItems = data.items.map(normalizeSheetItem).filter(Boolean);
    const remoteConfig = data.config && typeof data.config === "object" ? data.config : {};

    if (sheetItems.length > 0) {
      catalogProducts = sheetItems;
      writeCachedSheetData(sheetItems, remoteConfig);
    } else if (FALLBACK_PRODUCTS.length > 0) {
      catalogProducts = [...FALLBACK_PRODUCTS];
    } else {
      catalogProducts = [];
      writeCachedSheetData([], remoteConfig);
    }

    latestRemoteConfig = remoteConfig;
    syncDynamicOfferCategory();
    applyRemoteMediaConfig(remoteConfig);
  } catch (err) {
    console.warn("No se pudo cargar desde Google Sheets, usando caché o respaldo local:", err);
    const cached = readCachedSheetData();
    if (cached && cached.items.length) {
      catalogProducts = cached.items.map(normalizeSheetItem).filter(Boolean);
      latestRemoteConfig = cached.config || {};
      syncDynamicOfferCategory();
      applyRemoteMediaConfig(latestRemoteConfig);
    } else {
      catalogProducts = [...FALLBACK_PRODUCTS];
      syncDynamicOfferCategory();
    }
  }

  renderCatalog(currentCategoryFilter, currentSizeFilter);
}

function isNoSizeProduct(product) {
  return Boolean(product && product.noSize);
}

function isUnitallaProduct(product) {
  return Boolean(product && !product.noSize && product.isUnitalla);
}

function getStockTypeForSize(product, size) {
  if (!product) return "bajo_pedido";
  if (isNoSizeProduct(product)) {
    return product.noSizeStockType || "bajo_pedido";
  }
  if (isUnitallaProduct(product)) {
    return product.sizeStock && product.sizeStock.Unitalla === "entrega_inmediata"
      ? "entrega_inmediata"
      : "bajo_pedido";
  }
  if (!product.sizeStock) return "bajo_pedido";
  return product.sizeStock[size] === "entrega_inmediata" ? "entrega_inmediata" : "bajo_pedido";
}

function hasAnyImmediateStock(product) {
  if (!product) return false;
  if (isNoSizeProduct(product)) {
    return (product.noSizeStockType || "bajo_pedido") === "entrega_inmediata";
  }
  if (isUnitallaProduct(product)) {
    return getStockTypeForSize(product, "Unitalla") === "entrega_inmediata";
  }
  return ["XS", "S", "M", "L", "XL"].some(sz => getStockTypeForSize(product, sz) === "entrega_inmediata");
}

function matchesSizeFilter(product, sizeFilter) {
  if (!sizeFilter || sizeFilter === "todas") return true;
  if (isNoSizeProduct(product)) return true;
  if (isUnitallaProduct(product)) return true;
  return Object.prototype.hasOwnProperty.call(product.sizeStock || {}, sizeFilter);
}

function getStockRankForFilter(product, sizeFilter) {
  if (!sizeFilter || sizeFilter === "todas") {
    return hasAnyImmediateStock(product) ? 0 : 1;
  }
  if (isNoSizeProduct(product)) {
    return (product.noSizeStockType || "bajo_pedido") === "entrega_inmediata" ? 0 : 1;
  }
  if (isUnitallaProduct(product)) {
    return getStockTypeForSize(product, "Unitalla") === "entrega_inmediata" ? 0 : 1;
  }
  return getStockTypeForSize(product, sizeFilter) === "entrega_inmediata" ? 0 : 1;
}

function getStockLabel(stockType) {
  return stockType === "entrega_inmediata" ? "Entrega inmediata" : "Bajo pedido";
}

function getEffectivePrice(product) {
  if (!product) return 0;
  if (typeof product.effectivePrice === "number") return product.effectivePrice;
  if (typeof product.offerPrice === "number" && product.offerPrice > 0 && product.offerPrice < product.price) {
    return product.offerPrice;
  }
  return Number(product.price) || 0;
}

function formatPriceHtml(product, isModal = false) {
  const normalPrice = Number(product.price) || 0;
  const offerPrice = typeof product.offerPrice === "number" && product.offerPrice > 0 && product.offerPrice < normalPrice
    ? product.offerPrice
    : null;

  if (offerPrice !== null) {
    return `<span class="price-old">$${normalPrice.toFixed(2)}</span><span class="price-offer">$${offerPrice.toFixed(2)}</span>`;
  }
  return isModal ? `$${normalPrice.toFixed(2)}` : `$${normalPrice.toFixed(2)}`;
}

let cart = [];
let activeProductIndex = 0;
let activePhotoIndex = 0;
let selectedSize = "S";
let modalQuantity = 1;
let modalCarouselTimer = null;
let pendingOrderMessage = "";

function renderCatalog(filterCat = currentCategoryFilter, sizeFilter = currentSizeFilter) {
  const grid = document.getElementById("productGrid");
  if (!grid || !Array.isArray(catalogProducts)) return;

  const list = catalogProducts
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => {
      if (filterCat === "todos") return true;
      if (filterCat === "oferta") return Boolean(product.isOffer);
      return product.category === filterCat;
    })
    .filter(({ product }) => matchesSizeFilter(product, sizeFilter))
    .sort((a, b) => {
      const offerRankA = a.product.isOffer ? 0 : 1;
      const offerRankB = b.product.isOffer ? 0 : 1;
      if (offerRankA !== offerRankB) return offerRankA - offerRankB;

      const rankA = getStockRankForFilter(a.product, sizeFilter);
      const rankB = getStockRankForFilter(b.product, sizeFilter);
      if (rankA !== rankB) return rankA - rankB;
      return a.index - b.index;
    });

  if (list.length === 0) {
    grid.innerHTML = '<p style="font-size:12px; color:#666; grid-column:1 / -1; text-align:center;">No hay prendas que coincidan con este filtro por el momento.</p>';
    return;
  }

  grid.innerHTML = list.map(({ product, index }) => {
    const badgeHtml = product.isOffer ? `<span class="offer-badge">Oferta</span>` : "";
    const hideSizesCard = isNoSizeProduct(product) || isUnitallaProduct(product);
    return `
      <div class="product-card" data-category="${product.category}" onclick="openProductModal(${index})">
        <div class="product-img-wrap">
          ${badgeHtml}
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-title">${product.name}</div>
        <div class="product-color">Color: ${product.color}</div>
        <div class="product-price">${formatPriceHtml(product, false)}</div>
        <button type="button" class="btn-view">${hideSizesCard ? "Ver Producto" : "Seleccionar Talla"}</button>
      </div>
    `;
  }).join("");
}

function openMenu() {
  closeAll();
  document.getElementById("menuDrawer").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function openCart() {
  closeAll();
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function stopModalCarousel() {
  if (modalCarouselTimer) {
    clearInterval(modalCarouselTimer);
    modalCarouselTimer = null;
  }
}

function startModalCarousel() {
  stopModalCarousel();
  modalCarouselTimer = setInterval(() => {
    const p = catalogProducts[activeProductIndex];
    if (!p || !p.images || p.images.length < 2) return;
    const nextIdx = (activePhotoIndex + 1) % p.images.length;
    setModalPhoto(nextIdx);
  }, 2500);
}

function closeStepModal() {
  document.getElementById("stepModal").classList.remove("active");
  if (
    !document.getElementById("menuDrawer").classList.contains("active") &&
    !document.getElementById("cartDrawer").classList.contains("active") &&
    !document.getElementById("productModal").classList.contains("active")
  ) {
    document.getElementById("overlay").classList.remove("active");
  }
}

function closeAll() {
  stopModalCarousel();
  document.getElementById("menuDrawer").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("productModal").classList.remove("active");
  document.getElementById("stepModal").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

setInterval(() => {
  if (!Array.isArray(bannerImages) || bannerImages.length < 2) return;
  const heroImg = document.getElementById("heroBannerImg");
  if (!heroImg) return;
  bannerSlideIndex = (bannerSlideIndex + 1) % bannerImages.length;
  heroImg.style.display = "block";
  heroImg.src = bannerImages[bannerSlideIndex];
}, 5000);

function filterCategory(category, boxEl) {
  currentCategoryFilter = category || "todos";
  document.querySelectorAll(".cat-box").forEach(b => b.classList.remove("active-cat"));
  if (boxEl) {
    boxEl.classList.add("active-cat");
  } else if (currentCategoryFilter !== "todos") {
    const matchingBox = document.querySelector(`.cat-box[data-category="${currentCategoryFilter}"]`);
    if (matchingBox) matchingBox.classList.add("active-cat");
  }

  renderCatalog(currentCategoryFilter, currentSizeFilter);

  const title = document.getElementById("catalogTitle");
  if (title) {
    title.textContent =
      currentCategoryFilter === "todos"
        ? "Catálogo"
        : currentCategoryFilter === "oferta"
          ? "OFERTAS"
          : currentCategoryFilter.toUpperCase();
  }
}

function filterBySize(size, btnEl) {
  currentSizeFilter = size || "todas";
  document.querySelectorAll("#sizeFilterBar .size-filter-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) {
    btnEl.classList.add("active");
  } else {
    const matchingBtn = document.querySelector(`#sizeFilterBar .size-filter-btn[data-size="${currentSizeFilter}"]`);
    if (matchingBtn) matchingBtn.classList.add("active");
  }

  renderCatalog(currentCategoryFilter, currentSizeFilter);
}

function resetFilters() {
  currentCategoryFilter = "todos";
  currentSizeFilter = "todas";
  document.querySelectorAll(".cat-box").forEach(b => b.classList.remove("active-cat"));
  document.querySelectorAll("#sizeFilterBar .size-filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.size === "todas");
  });
  const title = document.getElementById("catalogTitle");
  if (title) title.textContent = "Catálogo";
  renderCatalog("todos", "todas");
}

function setSizeSectionVisible(visible) {
  const sizesWrap = document.getElementById("modalSizes");
  const modal = document.getElementById("productModal");
  if (!sizesWrap) return;

  if (modal) {
    modal.querySelectorAll("p, label, span, div, h4, h5").forEach(el => {
      if (el === sizesWrap || el.contains(sizesWrap)) return;
      const txt = (el.textContent || "").trim();
      if (/elige tu talla/i.test(txt) && txt.length <= 30) {
        el.style.display = visible ? "" : "none";
      }
    });
  }

  sizesWrap.style.display = visible ? "" : "none";
}

function renderModalSizes(product) {
  const sizesWrap = document.getElementById("modalSizes");
  if (!sizesWrap) return;

  if (isNoSizeProduct(product)) {
    selectedSize = "";
    sizesWrap.innerHTML = "";
    setSizeSectionVisible(false);
    return;
  }

  if (isUnitallaProduct(product)) {
    selectedSize = "Unitalla";
    sizesWrap.innerHTML = `
      <button type="button" class="size-btn selected" onclick="selectSize(this, 'Unitalla')">Unitalla</button>
    `;
    setSizeSectionVisible(false);
    sizesWrap.style.display = "";
    return;
  }

  setSizeSectionVisible(true);
  const listToRender = ["XS", "S", "M", "L", "XL"];
  selectedSize = (currentSizeFilter && currentSizeFilter !== "todas" && listToRender.includes(currentSizeFilter))
    ? currentSizeFilter
    : "S";

  sizesWrap.innerHTML = listToRender.map(sz => `
    <button
      type="button"
      class="size-btn ${sz === selectedSize ? "selected" : ""}"
      onclick="selectSize(this, '${sz}')"
    >${sz}</button>
  `).join("");
}

function updateModalStockBadge() {
  const p = catalogProducts[activeProductIndex];
  const st = isUnitallaProduct(p)
    ? getStockTypeForSize(p, "Unitalla")
    : getStockTypeForSize(p, selectedSize);
  const badge = document.getElementById("modalStockBadge");

  badge.textContent = getStockLabel(st);
  badge.className = "stock-badge " + (st === "entrega_inmediata" ? "stock-inmediato" : "stock-pedido");
}

function renderModalThumbs(images) {
  const thumbsWrap = document.getElementById("modalThumbs");
  if (!thumbsWrap) return;
  const list = Array.isArray(images) && images.length ? images : [];
  thumbsWrap.innerHTML = list.map((_, idx) => `
    <button
      type="button"
      class="thumb-dot ${idx === 0 ? "active" : ""}"
      onclick="setModalPhoto(${idx})"
      aria-label="Foto ${idx + 1}"
    ></button>
  `).join("");
}

function openProductModal(index) {
  stopModalCarousel();
  activeProductIndex = index;
  activePhotoIndex = 0;
  modalQuantity = 1;
  document.getElementById("modalQty").textContent = "1";

  const p = catalogProducts[index];
  renderModalSizes(p);

  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalPrice").innerHTML = formatPriceHtml(p, true);
  document.getElementById("modalDesc").textContent = p.description;
  document.getElementById("modalColor").textContent = p.color;

  renderModalThumbs(p.images);
  updateModalStockBadge();
  setModalPhoto(0);

  document.getElementById("productModal").classList.add("active");
  document.getElementById("overlay").classList.add("active");

  startModalCarousel();
}

function setModalPhoto(photoIdx) {
  activePhotoIndex = photoIdx;
  const p = catalogProducts[activeProductIndex];
  const imgEl = document.getElementById("modalImg");
  const nextSrc = (p && p.images && (p.images[photoIdx] || p.images[0])) || "";
  if (!imgEl || !nextSrc) return;

  if (imgEl.getAttribute("src") !== nextSrc) {
    imgEl.classList.add("photo-switching");
    setTimeout(() => {
      imgEl.src = nextSrc;
      requestAnimationFrame(() => {
        imgEl.classList.remove("photo-switching");
      });
    }, 110);
  }

  document.querySelectorAll("#modalThumbs .thumb-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === photoIdx);
  });
}

function selectSize(btn, sz) {
  selectedSize = sz;
  document.querySelectorAll("#modalSizes .size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  updateModalStockBadge();
}

function changeModalQty(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  document.getElementById("modalQty").textContent = String(modalQuantity);
}

function addCurrentProductToCart() {
  const p = catalogProducts[activeProductIndex];
  const st = isUnitallaProduct(p)
    ? getStockTypeForSize(p, "Unitalla")
    : getStockTypeForSize(p, selectedSize);
  const sizeToSave = isNoSizeProduct(p) ? "" : selectedSize;
  const unitPrice = getEffectivePrice(p);

  const existing = cart.find(
    item =>
      item.name === p.name &&
      item.color === p.color &&
      item.size === sizeToSave &&
      item.stockType === st &&
      item.price === unitPrice
  );
  if (existing) {
    existing.cantidad += modalQuantity;
  } else {
    cart.push({
      name: p.name,
      color: p.color,
      size: sizeToSave,
      price: unitPrice,
      isOffer: Boolean(p.isOffer),
      stockType: st,
      cantidad: modalQuantity
    });
  }

  renderCart();
  openCart();
}

function updateCartQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].cantidad = (cart[idx].cantidad || 1) + delta;
  if (cart[idx].cantidad <= 0) {
    cart.splice(idx, 1);
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const count = document.getElementById("cart-count");
  const totalEl = document.getElementById("cartTotal");

  const totalUnidades = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);
  count.textContent = totalUnidades;

  if (cart.length === 0) {
    container.innerHTML = '<p style="font-size:12px; color:#777; margin-top:20px;">Tu carrito está vacío.</p>';
    totalEl.textContent = "$0.00";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, idx) => {
    const cant = item.cantidad || 1;
    const subtotal = item.price * cant;
    const stockText = getStockLabel(item.stockType);
    const stockClass = item.stockType === "entrega_inmediata" ? "stock-inmediato" : "stock-pedido";
    const tallaTexto = item.size ? ` | Talla: ${item.size}` : "";
    const ofertaTag = item.isOffer ? " · OFERTA" : "";
    total += subtotal;
    return `
      <div class="cart-item">
        <div>
          <span class="stock-badge ${stockClass}" style="margin-bottom:4px;">${stockText}${ofertaTag}</span>
          <div style="font-weight:500;">${item.name}</div>
          <small style="color:#666;">Color: ${item.color}${tallaTexto} — $${subtotal.toFixed(2)}</small>
          <div>
            <div class="cart-qty-controls">
              <button type="button" onclick="updateCartQty(${idx}, -1)">−</button>
              <span>${cant}</span>
              <button type="button" onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
        <button type="button" onclick="removeItem(${idx})" style="background:none; border:none; cursor:pointer; font-size:11px; text-decoration:underline;">Quitar</button>
      </div>
    `;
  }).join("");

  totalEl.textContent = "$" + total.toFixed(2);
}

function removeItem(idx) {
  cart.splice(idx, 1);
  renderCart();
}

function buildShareMessage() {
  let total = 0;
  const items = cart.map(item => {
    const cant = item.cantidad || 1;
    const subtotal = item.price * cant;
    const stockText = getStockLabel(item.stockType);
    const sizePart = item.size ? ` Talla ${item.size}` : "";
    const offerPart = item.isOffer ? " [OFERTA]" : "";
    total += subtotal;
    return `${item.name} (${item.color})${sizePart} x ${cant} [${stockText}]${offerPart} - $${subtotal.toFixed(2)}`;
  });

  return `Hola KLO! Quiero pedir:\n${items.join("\n")}\nTOTAL: $${total.toFixed(2)}`;
}

function copiarTexto(texto) {
  let copiado = false;
  try {
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "0";
    area.style.width = "2px";
    area.style.height = "2px";
    area.style.opacity = "0.01";
    document.body.appendChild(area);
    area.focus();
    area.select();
    area.setSelectionRange(0, area.value.length);
    copiado = document.execCommand("copy");
    area.remove();
  } catch (e) {
    copiado = false;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(() => {}).catch(() => {});
  }
  return copiado;
}

function copiarPasoUno() {
  if (!pendingOrderMessage) return;
  copiarTexto(pendingOrderMessage);

  const btn = document.getElementById("btnStepCopy");
  const status = document.getElementById("stepStatus");
  if (btn) {
    btn.textContent = "¡Copiado! Pedido listo";
    btn.classList.add("copied");
  }
  if (status) {
    status.innerHTML = "Listo, ya lo llevas copiado. Ahora toca <strong>Abrir chat de KLO GYM CLUB</strong> y pégalo en el mensaje.";
  }
}

function irAlChatPasoDos() {
  const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (esMovil) {
    window.location.href = INSTAGRAM_CHAT_URL;
    return;
  }
  const win = window.open(INSTAGRAM_CHAT_URL, "_blank", "noopener,noreferrer");
  if (!win) {
    window.location.href = INSTAGRAM_CHAT_URL;
  }
}

function abrirModalDosPasos() {
  if (!cart || cart.length === 0) {
    alert("Agrega al menos una prenda al carrito.");
    return;
  }

  pendingOrderMessage = buildShareMessage();
  document.getElementById("stepOrderText").textContent = pendingOrderMessage;

  const btn = document.getElementById("btnStepCopy");
  const status = document.getElementById("stepStatus");
  if (btn) {
    btn.textContent = "Copiar pedido";
    btn.classList.remove("copied");
  }
  if (status) {
    status.innerHTML = "Toca <strong>Copiar pedido</strong> y luego ve al chat de KLO para pegarlo.";
  }

  copiarTexto(pendingOrderMessage);

  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("overlay").classList.add("active");

  requestAnimationFrame(() => {
    setTimeout(() => {
      document.getElementById("stepModal").classList.add("active");
    }, 80);
  });
}

function enviarPedido() {
  abrirModalDosPasos();
}

function pedirPorInstagram() {
  abrirModalDosPasos();
}

function orderViaInstagram() {
  abrirModalDosPasos();
}

document.addEventListener("DOMContentLoaded", () => {
  syncDynamicOfferCategory();
  renderCatalog("todos", "todas");
  loadProductsFromSheet();
});
