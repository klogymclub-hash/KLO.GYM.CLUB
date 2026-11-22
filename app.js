const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbyRbgd97mt0QWbdhq-33tBBs5TeIaLq9n_fttTUle7A79-sYweTqOa3VSTWHMEYmEvV/exec";
const SHEETS_CACHE_KEY = "klo_gym_club_sheet_items_v1";

const FALLBACK_PRODUCTS = typeof products !== "undefined" && Array.isArray(products) ? products : [];

function readCachedSheetItems() {
  try {
    const raw = localStorage.getItem(SHEETS_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : null;
  } catch (e) {
    return null;
  }
}

function writeCachedSheetItems(items) {
  try {
    localStorage.setItem(SHEETS_CACHE_KEY, JSON.stringify(items));
  } catch (e) {
    // Ignorar si el almacenamiento del navegador está bloqueado o lleno
  }
}

const initialCached = readCachedSheetItems();
let catalogProducts = initialCached ? [...initialCached] : [...FALLBACK_PRODUCTS];

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

function normalizeSheetItem(raw) {
  const name = String(raw.name || "").trim();
  if (!name) return null;

  const color = String(raw.color || "").trim();
  const category = String(raw.category || "todos").trim().toLowerCase();
  const priceNum = Number(raw.price);
  const price = Number.isFinite(priceNum) ? priceNum : 0;
  const description = String(raw.description || "").trim();

  const rawImages = Array.isArray(raw.images)
    ? raw.images
    : String(raw.images || "").split(",");
  const images = rawImages.map(normalizeImageUrl).filter(Boolean);

  const sizeCols = ["XS", "S", "M", "L", "XL", "Unitalla"];
  const stock = {};
  const sizeStock = {};
  const parsedMap = {};

  for (const sz of sizeCols) {
    const rawVal = raw.stock && raw.stock[sz] !== undefined ? raw.stock[sz] : raw[sz];
    const parsed = parseCellValue(rawVal);
    parsedMap[sz] = parsed;
    stock[sz] = parsed.qty;
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

  const isAccessoryCategory =
    category.includes("accesor") ||
    category.includes("bolso") ||
    category.includes("mochila") ||
    category.includes("gorra") ||
    category.includes("calcet");

  const isOnlyUnitalla =
    !isAccessoryCategory &&
    hasUnitallaStock &&
    !hasStandardStock;

  const noSize =
    !isOnlyUnitalla &&
    isAccessoryCategory &&
    !hasStandardStock &&
    !hasUnitallaStock;

  const anyPositiveStock = Object.values(stock).some(v => v > 0);
  const rawDisponibilidad = getRawDisponibilidad(raw);
  const dispRaw = String(rawDisponibilidad ?? "").trim().toLowerCase();

  let noSizeStockType = anyPositiveStock ? "entrega_inmediata" : "bajo_pedido";

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

  if (isOnlyUnitalla && !dispRaw) {
    sizeStock.Unitalla = stock.Unitalla > 0 ? "entrega_inmediata" : "bajo_pedido";
  }

  return {
    name,
    color,
    category,
    price,
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

async function loadProductsFromSheet() {
  if (!GOOGLE_SHEETS_API_URL || GOOGLE_SHEETS_API_URL.includes("PEGA_AQUI_TU_URL")) {
    catalogProducts = [...FALLBACK_PRODUCTS];
    renderCatalog("todos");
    return;
  }

  try {
    const res = await fetch(GOOGLE_SHEETS_API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Error HTTP " + res.status);

    const data = await res.json();
    if (!data || !data.ok || !Array.isArray(data.items)) {
      throw new Error("Respuesta inválida del Apps Script");
    }

    const sheetItems = data.items.map(normalizeSheetItem).filter(Boolean);

    if (sheetItems.length > 0) {
      catalogProducts = sheetItems;
      writeCachedSheetItems(sheetItems);
    } else if (FALLBACK_PRODUCTS.length > 0) {
      catalogProducts = [...FALLBACK_PRODUCTS];
    } else {
      catalogProducts = [];
      writeCachedSheetItems([]);
    }
  } catch (err) {
    console.warn("No se pudo cargar desde Google Sheets, usando caché o respaldo local:", err);
    const cached = readCachedSheetItems();
    catalogProducts = cached ? [...cached] : [...FALLBACK_PRODUCTS];
  }

  const activeCatEl = document.querySelector(".cat-box.active-cat");
  const currentCat = activeCatEl && activeCatEl.dataset.category ? activeCatEl.dataset.category : "todos";
  renderCatalog(currentCat);
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

function getStockLabel(stockType) {
  return stockType === "entrega_inmediata" ? "Entrega inmediata" : "Bajo pedido";
}

let cart = [];
let currentSlide = 0;
let activeProductIndex = 0;
let activePhotoIndex = 0;
let selectedSize = "S";
let modalQuantity = 1;
let modalCarouselTimer = null;
let pendingOrderMessage = "";

function renderCatalog(filterCat = "todos") {
  const grid = document.getElementById("productGrid");
  if (!grid || !Array.isArray(catalogProducts)) return;

  const list = catalogProducts
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => filterCat === "todos" || product.category === filterCat);

  if (list.length === 0) {
    grid.innerHTML = '<p style="font-size:12px; color:#666; grid-column:1 / -1; text-align:center;">No hay prendas en esta categoría por el momento.</p>';
    return;
  }

  grid.innerHTML = list.map(({ product, index }) => `
    <div class="product-card" data-category="${product.category}" onclick="openProductModal(${index})">
      <div class="product-img-wrap">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-title">${product.name}</div>
      <div class="product-color">Color: ${product.color}</div>
      <div class="product-price">$${Number(product.price).toFixed(2)}</div>
      <button type="button" class="btn-view">${isNoSizeProduct(product) ? "Ver Producto" : "Seleccionar Talla"}</button>
    </div>
  `).join("");
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

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length || !dots.length) return;
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % 2;
  showSlide(currentSlide);
}, 5000);

function filterCategory(category, boxEl) {
  document.querySelectorAll(".cat-box").forEach(b => b.classList.remove("active-cat"));
  if (boxEl) boxEl.classList.add("active-cat");

  renderCatalog(category);

  const title = document.getElementById("catalogTitle");
  title.textContent = category === "todos" ? "Catálogo" : category.toUpperCase();
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
  selectedSize = "S";
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
  const st = getStockTypeForSize(p, selectedSize);
  const badge = document.getElementById("modalStockBadge");

  if (isNoSizeProduct(p)) {
    badge.textContent = getStockLabel(st);
  } else if (isUnitallaProduct(p)) {
    badge.textContent = "Unitalla: " + getStockLabel(st);
  } else {
    badge.textContent = "Talla " + selectedSize + ": " + getStockLabel(st);
  }

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
  document.getElementById("modalPrice").textContent = "$" + Number(p.price).toFixed(2);
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
  const nextSrc = p.images[photoIdx] || p.images[0] || "";
  if (imgEl.getAttribute("src") !== nextSrc) {
    imgEl.src = nextSrc;
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
  const st = getStockTypeForSize(p, selectedSize);
  const sizeToSave = isNoSizeProduct(p) ? "" : selectedSize;

  const existing = cart.find(
    item =>
      item.name === p.name &&
      item.color === p.color &&
      item.size === sizeToSave &&
      item.stockType === st
  );
  if (existing) {
    existing.cantidad += modalQuantity;
  } else {
    cart.push({
      name: p.name,
      color: p.color,
      size: sizeToSave,
      price: p.price,
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
    total += subtotal;
    return `
      <div class="cart-item">
        <div>
          <span class="stock-badge ${stockClass}" style="margin-bottom:4px;">${stockText}</span>
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
    total += subtotal;
    return `${item.name} (${item.color})${sizePart} x ${cant} [${stockText}] - $${subtotal.toFixed(2)}`;
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
  renderCatalog("todos");
  loadProductsFromSheet();
});