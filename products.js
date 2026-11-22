const INSTAGRAM_USUARIO = "klo.gymclub";
const INSTAGRAM_CHAT_URL = "https://ig.me/m/" + INSTAGRAM_USUARIO;

// Configura por talla: "entrega_inmediata" o "bajo_pedido"
const products = [
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Chocolate",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/209.png",
      "img/210.png"
    ]
  },
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Berry",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/205.png",
      "img/206.png"
    ]
  },
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/361.png",
      "img/362.png"
    ]
  },
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Charcoal",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/207.png",
      "img/208.png"
    ]
  },
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Powder Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/213.png",
      "img/214.png"
    ]
  },
  {
    name: "Dynamic High Neck Halter Bra",
    price: 25,
    color: "Optic White",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/211.png",
      "img/212.png"
    ]
  },
  {
    name: "Dynamic Shorts | 4.5\" | V-Back",
    price: 30,
    color: "Midnight Black",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con corte en V en la espalda y largo de 4.5 pulgadas. Tejido suave y elástico con ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/242.png",
      "img/241.png"
    ]
  },
  {
    name: "Dynamic Shorts | 4.5\" | V-Back",
    price: 30,
    color: "Chocolate",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con corte en V en la espalda y largo de 4.5 pulgadas. Tejido suave y elástico con ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/240.png",
      "img/239.png"
    ]
  },
  {
    name: "Dynamic Shorts | 4.5\" | V-Back",
    price: 30,
    color: "Berry",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con corte en V en la espalda y largo de 4.5 pulgadas. Tejido suave y elástico con ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/236.png",
      "img/235.png"
    ]
  },
  {
    name: "Dynamic Shorts | 4.5\" | V-Back",
    price: 30,
    color: "Charcoal",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con corte en V en la espalda y largo de 4.5 pulgadas. Tejido suave y elástico con ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/238.png",
      "img/237.png"
    ]
  },
  {
    name: "Dynamic Shorts | 4.5\" | V-Back",
    price: 30,
    color: "Powder Blue",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con corte en V en la espalda y largo de 4.5 pulgadas. Tejido suave y elástico con ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/244.png",
      "img/243.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/229.png",
      "img/230.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Chocolate",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/227.png",
      "img/228.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Berry",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/223.png",
      "img/224.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Charcoal",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/225.png",
      "img/226.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Powder Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/233.png",
      "img/234.png"
    ]
  },
  {
    name: "Dynamic Longline Halter Top",
    price: 30,
    color: "Optic White",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo de cuello alto con tiras cruzadas estilo halter y espalda descubierta. Tejido suave de alta elasticidad que brinda soporte y estiliza la silueta.",
    images: [
      "img/231.png",
      "img/232.png"
    ]
  },
  {
    name: "Dynamic Leggings | V-Back",
    price: 35,
    color: "Midnight Black",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo de tiro alto con corte en V en la espalda y largo completo. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/222.png",
      "img/221.png"
    ]
  },
  {
    name: "Dynamic Leggings | V-Back",
    price: 35,
    color: "Chocolate",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo de tiro alto con corte en V en la espalda y largo completo. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/220.png",
      "img/219.png"
    ]
  },
  {
    name: "Dynamic Leggings | V-Back",
    price: 35,
    color: "Berry",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo de tiro alto con corte en V en la espalda y largo completo. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/216.png",
      "img/215.png"
    ]
  },
  {
    name: "Dynamic Leggings | V-Back",
    price: 35,
    color: "Charcoal",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo de tiro alto con corte en V en la espalda y largo completo. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/218.png",
      "img/217.png"
    ]
  },
  {
    name: "Dynamic Flares | V-Back",
    price: 40,
    color: "Midnight Black",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón acampanado deportivo de tiro alto con corte en V en la espalda. Tejido suave y elástico de ajuste esculpido que brinda comodidad, movimiento y realce al entrenar.",
    images: [
      "img/202.png",
      "img/201.png"
    ]
  },
  {
    name: "Dynamic Flares | V-Back",
    price: 40,
    color: "Chocolate",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón acampanado deportivo de tiro alto con corte en V en la espalda. Tejido suave y elástico de ajuste esculpido que brinda comodidad, movimiento y realce al entrenar.",
    images: [
      "img/200.png",
      "img/199.png"
    ]
  },
  {
    name: "Dynamic Flares | V-Back",
    price: 40,
    color: "Berry",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón acampanado deportivo de tiro alto con corte en V en la espalda. Tejido suave y elástico de ajuste esculpido que brinda comodidad, movimiento y realce al entrenar.",
    images: [
      "img/196.png",
      "img/195.png"
    ]
  },
  {
    name: "Dynamic Flares | V-Back",
    price: 40,
    color: "Charcoal",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón acampanado deportivo de tiro alto con corte en V en la espalda. Tejido suave y elástico de ajuste esculpido que brinda comodidad, movimiento y realce al entrenar.",
    images: [
      "img/198.png",
      "img/197.png"
    ]
  },
  {
    name: "Dynamic Flares | V-Back",
    price: 40,
    color: "Powder Blue",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón acampanado deportivo de tiro alto con corte en V en la espalda. Tejido suave y elástico de ajuste esculpido que brinda comodidad, movimiento y realce al entrenar.",
    images: [
      "img/204.png",
      "img/203.png"
    ]
  },
  {
    name: "Vision Long Sleeve Top",
    price: 35,
    color: "Optic White",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga larga con escote recto de hombros descubiertos y abertura para el pulgar. Tejido suave de alta elasticidad que estiliza la silueta y brinda ajuste cómodo al entrenar.",
    images: [
      "img/261.png",
      "img/262.png"
    ]
  },
  {
    name: "Vision Long Sleeve Top",
    price: 35,
    color: "Fig",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga larga con escote recto de hombros descubiertos y abertura para el pulgar. Tejido suave de alta elasticidad que estiliza la silueta y brinda ajuste cómodo al entrenar.",
    images: [
      "img/255.png",
      "img/256.png"
    ]
  },
  {
    name: "Vision Long Sleeve Top",
    price: 35,
    color: "Maroon",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga larga con escote recto de hombros descubiertos y abertura para el pulgar. Tejido suave de alta elasticidad que estiliza la silueta y brinda ajuste cómodo al entrenar.",
    images: [
      "img/257.png",
      "img/258.png"
    ]
  },
  {
    name: "Vision Long Sleeve Top",
    price: 35,
    color: "Carbon",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga larga con escote recto de hombros descubiertos y abertura para el pulgar. Tejido suave de alta elasticidad que estiliza la silueta y brinda ajuste cómodo al entrenar.",
    images: [
      "img/253.png",
      "img/254.png"
    ]
  },
  {
    name: "Vision Long Sleeve Top",
    price: 35,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga larga con escote recto de hombros descubiertos y abertura para el pulgar. Tejido suave de alta elasticidad que estiliza la silueta y brinda ajuste cómodo al entrenar.",
    images: [
      "img/259.png",
      "img/260.png"
    ]
  },
  {
    name: "Vision Capris | Straight Waistband",
    price: 35,
    color: "Fig",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo estilo capri de tiro alto con pretina recta y largo debajo de la rodilla. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/248.png",
      "img/247.png"
    ]
  },
  {
    name: "Vision Capris | Straight Waistband",
    price: 35,
    color: "Maroon",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo estilo capri de tiro alto con pretina recta y largo debajo de la rodilla. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/249.png",
      "img/250.png"
    ]
  },
  {
    name: "Vision Capris | Straight Waistband",
    price: 35,
    color: "Carbon",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo estilo capri de tiro alto con pretina recta y largo debajo de la rodilla. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/245.png",
      "img/246.png"
    ]
  },
  {
    name: "Vision Capris | Straight Waistband",
    price: 35,
    color: "Midnight Black",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Legging deportivo estilo capri de tiro alto con pretina recta y largo debajo de la rodilla. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/251.png",
      "img/252.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Butter",
    category: "enterizos",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/353.png",
      "img/354.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Palm Green",
    category: "enterizos",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/351.png",
      "img/352.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Coral",
    category: "enterizos",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/349.png",
      "img/350.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Peach sorbet",
    category: "enterizos",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/347.png",
      "img/348.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Ivory",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo corto de manga corta con escote pronunciado en la espalda y broche metálico posterior. Ajuste esculpido sin costuras frontales para máxima comodidad.",
    images: [
      "img/364.png",
      "img/363.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Ultraviolet",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/345.png",
      "img/346.png"
    ]
  },
  {
    name: "Impact Short Sleeve One Piece",
    price: 55,
    color: "Midnight Black",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga corta con escote redondo al frente y espalda abierta con broche en la nuca. Tejido suave y elástico de ajuste esculpido que brinda comodidad y realce al entrenar.",
    images: [
      "img/355.png",
      "img/356.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Light Rose Pink",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/304.png",
      "img/305.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/300.png",
      "img/301.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Butter",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/280.png",
      "img/281.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Coral",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/313.png",
      "img/314.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Winter Berry",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/307.png",
      "img/308.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Ivory",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/282.png",
      "img/283.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Palm Green",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/333.png",
      "img/334.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Peach sorbet",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/327.png",
      "img/328.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Ultraviolet",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/321.png",
      "img/322.png"
    ]
  },
  {
    name: "Impact Scoop Neck Bra",
    price: 25,
    color: "Electric Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con escote redondo al frente y tirantes delgados con banda elástica en la espalda. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/339.png",
      "img/340.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Light Rose Pink",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/319.png",
      "img/318.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/302.png",
      "img/303.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Butter",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/288.png",
      "img/289.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Coral",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/315.png",
      "img/316.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Winter Berry",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/309.png",
      "img/310.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Ivory",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/284.png",
      "img/285.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Palm Green",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/335.png",
      "img/336.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Peach sorbet",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/329.png",
      "img/330.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Ultraviolet",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/323.png",
      "img/324.png"
    ]
  },
  {
    name: "Impact Scoop Neck Top",
    price: 30,
    color: "Electric Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes delgados con escote redondo al frente y espalda abierta. Tejido suave y elástico de ajuste cómodo que estiliza la silueta al entrenar.",
    images: [
      "img/341.png",
      "img/342.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Light Rose Pink",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/101.png",
      "img/102.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Midnight Black",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/93.png",
      "img/94.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Coral",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/317.png",
      "img/320.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Winter Berry",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/311.png",
      "img/312.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Ivory",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/286.png",
      "img/287.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Palm Green",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/337.png",
      "img/338.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Peach sorbet",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/331.png",
      "img/332.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Ultraviolet",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/325.png",
      "img/326.png"
    ]
  },
  {
    name: "Impact Strappy Bra",
    price: 25,
    color: "Cornflower",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle fruncido al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/111.png",
      "img/112.png"
    ]
  },
  {
    name: "Impact Strappy Bra",
    price: 25,
    color: "Copper",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle fruncido al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/119.png",
      "img/120.png"
    ]
  },
  {
    name: "Impact Strappy Bra",
    price: 25,
    color: "Butter",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle fruncido al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/103.png",
      "img/104.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Cornflower",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/115.png",
      "img/116.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Copper",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/123.png",
      "img/124.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Butter",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/107.png",
      "img/108.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Cornflower",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con cuello redondo y ajuste ceñido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/113.png",
      "img/114.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Copper",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con cuello redondo y ajuste ceñido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/121.png",
      "img/122.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Butter",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con cuello redondo y ajuste ceñido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/105.png",
      "img/106.png"
    ]
  },
  {
    name: "Impact Leggins",
    price: 35,
    color: "Cornflower",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/117.png",
      "img/118.png"
    ]
  },
  {
    name: "Impact Leggins",
    price: 35,
    color: "Copper",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/125.png",
      "img/126.png"
    ]
  },
  {
    name: "Impact Leggins",
    price: 35,
    color: "Butter",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/109.png",
      "img/110.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Light Rose Pink",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/99.png",
      "img/100.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Electric Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/95.png",
      "img/96.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Chilli",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/83.png",
      "img/84.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/91.png",
      "img/92.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Blossom",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/75.png",
      "img/76.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Glacier",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/71.png",
      "img/72.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Grape",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/79.png",
      "img/80.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Graphite",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/87.png",
      "img/88.png"
    ]
  },
  {
    name: "Impact Backless Bandeau",
    price: 25,
    color: "Bright Fuchsia",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bandeau sin tirantes con espalda descubierta y tiras elásticas cruzadas. Tejido suave y elástico de ajuste cómodo con soporte ligero para entrenar.",
    images: [
      "img/67.png",
      "img/68.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Electric Blue",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/97.png",
      "img/98.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Chilli",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/85.png",
      "img/86.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Blossom",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/77.png",
      "img/78.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Glacier",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/73.png",
      "img/74.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Grape",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/81.png",
      "img/82.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Graphite",
    category: "shorts",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/89.png",
      "img/90.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Bright Fuchsia",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico que brinda comodidad y realce al entrenar.",
    images: [
      "img/69.png",
      "img/70.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Cobalt",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/61.png",
      "img/62.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Dove",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/55.png",
      "img/56.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Umber",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/49.png",
      "img/50.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/177.png",
      "img/178.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Carbon",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/171.png",
      "img/172.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Lotus",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/163.png",
      "img/164.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Fig",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/153.png",
      "img/157.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Willow",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/146.png",
      "img/147.png"
    ]
  },
  {
    name: "Vision Twist Front Sports Bra",
    price: 25,
    color: "Petrol Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo tipo bra con detalle cruzado al frente y tirantes finos de espalda descubierta con banda elástica. Tejido suave y elástico de ajuste cómodo para entrenar.",
    images: [
      "img/139.png",
      "img/140.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Cobalt",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/63.png",
      "img/62_2.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Dove",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/57.png",
      "img/58.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Umber",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/51.png",
      "img/52.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/179.png",
      "img/180.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Carbon",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/173.png",
      "img/174.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Lotus",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/165.png",
      "img/166.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Fig",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/158.png",
      "img/159.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Willow",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/148.png",
      "img/149.png"
    ]
  },
  {
    name: "Vision Twist Front Longline Top",
    price: 30,
    color: "Petrol Blue",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo largo con detalle cruzado al frente y tirantes finos en espalda descubierta. Tejido suave y elástico de ajuste ceñido para entrenar.",
    images: [
      "img/141.png",
      "img/142.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Cobalt",
    category: "flares",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/65.png",
      "img/66.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Dove",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/59.png",
      "img/60.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Umber",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/53.png",
      "img/54.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Midnight Black",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/181.png",
      "img/182.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Carbon",
    category: "flares",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/175.png",
      "img/176.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Lotus",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/167.png",
      "img/170.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Fig",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/160.png",
      "img/162.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Willow",
    category: "flares",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/151.png",
      "img/152.png"
    ]
  },
  {
    name: "Vision Flares",
    price: 40,
    color: "Petrol Blue",
    category: "flares",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo acampanado de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/143.png",
      "img/145.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Ivory",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/137.png",
      "img/138.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Midnight Black",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/135.png",
      "img/136.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Electric Blue",
    category: "enterizos",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/133.png",
      "img/134.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Espresso",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/131.png",
      "img/132.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Winter Berry",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/129.png",
      "img/130.png"
    ]
  },
  {
    name: "Impact Long Sleeve One Piece",
    price: 55,
    color: "Truffle",
    category: "enterizos",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Enterizo deportivo de manga larga con cuello redondo, abertura para el pulgar y espalda descubierta con ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar.",
    images: [
      "img/127.png",
      "img/128.png"
    ]
  },
  {
    name: "Oner Straight Leg Bottoms",
    price: 40,
    color: "Ruby Red",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo de pierna recta y tiro alto con pretina ancha y ajuste cómodo. Tejido suave y elástico con caída fluida para entrenar o uso diario.",
    images: [
      "img/275.png",
      "img/274.png"
    ]
  },
  {
    name: "Oner Straight Leg Bottoms",
    price: 40,
    color: "Dusty Purple",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo de pierna recta y tiro alto con pretina ancha y ajuste cómodo. Tejido suave y elástico con caída fluida para entrenar o uso diario.",
    images: [
      "img/272.png",
      "img/273.png"
    ]
  },
  {
    name: "Oner Straight Leg Bottoms",
    price: 40,
    color: "Ballet Pink",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo de pierna recta y tiro alto con pretina ancha y ajuste cómodo. Tejido suave y elástico con caída fluida para entrenar o uso diario.",
    images: [
      "img/270.png",
      "img/271.png"
    ]
  },
  {
    name: "Oner Straight Leg Bottoms",
    price: 40,
    color: "Granite Blue",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo de pierna recta y tiro alto con pretina ancha y ajuste cómodo. Tejido suave y elástico con caída fluida para entrenar o uso diario.",
    images: [
      "img/277.png",
      "img/276.png"
    ]
  },
  {
    name: "Oner Straight Leg Bottoms",
    price: 40,
    color: "Midnight Black",
    category: "flares",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Pantalón deportivo de pierna recta y tiro alto con pretina ancha y ajuste cómodo. Tejido suave y elástico con caída fluida para entrenar o uso diario.",
    images: [
      "img/279.png",
      "img/278.png"
    ]
  },
  {
    name: "Signature Wide Leg Jogger",
    price: 40,
    color: "Optic White",
    category: "joggers",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "entrega_inmediata"
    },
    description: "Jogger deportivo de pierna ancha y tiro alto con cintura elástica, bolsillos laterales y detalle estampado en la pierna. Ajuste holgado y cómodo para entrenar o descansar.",
    images: [
      "img/267.png",
      "img/268.png"
    ]
  },
  {
    name: "Signature Wide Leg Jogger",
    price: 40,
    color: "Grey Marl",
    category: "joggers",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "entrega_inmediata"
    },
    description: "Jogger deportivo de pierna ancha y tiro alto con cintura elástica, bolsillos laterales y detalle estampado en la pierna. Ajuste holgado y cómodo para entrenar o descansar.",
    images: [
      "img/265.png",
      "img/266.png"
    ]
  },
  {
    name: "Signature Wide Leg Jogger",
    price: 40,
    color: "Midnight Black",
    category: "joggers",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "entrega_inmediata"
    },
    description: "Jogger deportivo de pierna ancha y tiro alto con cintura elástica, bolsillos laterales y detalle estampado en la pierna. Ajuste holgado y cómodo para entrenar o descansar.",
    images: [
      "img/263.png",
      "img/264.png"
    ]
  },
  {
    name: "DFYNE Crew Socks",
    price: 10,
    color: "White",
    category: "accesorios",
    sizeStock: {
      Unitalla: "entrega_inmediata"
    },
    description: "Calcetines deportivos de caña media con tejido acanalado suave y elástico, ajuste cómodo y detalle de marca. Ideales para entrenar o uso diario.",
    images: [
      "img/269.png"
    ]
  },
  {
    name: "Origin Strappy Top",
    price: 30,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo corto de tirantes finos y espalda descubierta con escote recto y ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/186.png",
      "img/185.png"
    ]
  },
  {
    name: "Origin Strappy Top",
    price: 30,
    color: "Mauve",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Top deportivo corto de tirantes finos y espalda descubierta con escote recto y ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/189.png",
      "img/190.png"
    ]
  },
  {
    name: "Origin Strappy Top",
    price: 30,
    color: "Thunder",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo corto de tirantes finos y espalda descubierta con escote recto y ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/193.png",
      "img/194.png"
    ]
  },
  {
    name: "Vision Shorts",
    price: 35,
    color: "Umber",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/35.png",
      "img/36.png"
    ]
  },
  {
    name: "Vision Shorts",
    price: 35,
    color: "Hibiscus",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/27.png",
      "img/28.png"
    ]
  },
  {
    name: "Vision Shorts",
    price: 35,
    color: "Rain",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/19.png",
      "img/20.png"
    ]
  },
  {
    name: "Vision Leggings",
    price: 40,
    color: "Umber",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/33.png",
      "img/34.png"
    ]
  },
  {
    name: "Vision Leggings",
    price: 40,
    color: "Hibiscus",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/25.png",
      "img/26.png"
    ]
  },
  {
    name: "Vision Leggings",
    price: 40,
    color: "Rain",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad que brinda soporte y realce al entrenar.",
    images: [
      "img/17.png",
      "img/18.png"
    ]
  },
  {
    name: "Vision Shrug",
    price: 25,
    color: "Umber",
    category: "chaquetas",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bolero deportivo de manga larga con abertura para el pulgar y espalda abierta. Tejido suave y elástico ideal para llevar sobre tops o bras al entrenar.",
    images: [
      "img/29.png",
      "img/30.png"
    ]
  },
  {
    name: "Vision Shrug",
    price: 25,
    color: "Hibiscus",
    category: "chaquetas",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bolero deportivo de manga larga con abertura para el pulgar y espalda abierta. Tejido suave y elástico ideal para llevar sobre tops o bras al entrenar.",
    images: [
      "img/21.png",
      "img/22.png"
    ]
  },
  {
    name: "Vision Shrug",
    price: 25,
    color: "Rain",
    category: "chaquetas",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bolero deportivo de manga larga con abertura para el pulgar y espalda abierta. Tejido suave y elástico ideal para llevar sobre tops o bras al entrenar.",
    images: [
      "img/13.png",
      "img/14.png"
    ]
  },
  {
    name: "Vision Sports Bra",
    price: 25,
    color: "Umber",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bra deportivo de tirantes cruzados en la espalda y escote favorecedor con ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/31.png",
      "img/32.png"
    ]
  },
  {
    name: "Vision Sports Bra",
    price: 25,
    color: "Hibiscus",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bra deportivo de tirantes cruzados en la espalda y escote favorecedor con ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/23.png",
      "img/24.png"
    ]
  },
  {
    name: "Vision Sports Bra",
    price: 25,
    color: "Rain",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "entrega_inmediata",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Bra deportivo de tirantes cruzados en la espalda y escote favorecedor con ajuste ceñido. Tejido suave y elástico ideal para entrenar o combinar.",
    images: [
      "img/15.png",
      "img/16.png"
    ]
  },
  {
    name: "Dynamic Strappy Top Coco",
    price: 30,
    color: "Coco",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes finos y espalda cruzada con escote pronunciado y ajuste ceñido. Tejido suave y elástico ideal para entrenar o uso diario.",
    images: [
      "img/7.png",
      "img/8.png"
    ]
  },
  {
    name: "Dynamic Strappy Top Coco",
    price: 30,
    color: "Dusk",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de tirantes finos y espalda cruzada con escote pronunciado y ajuste ceñido. Tejido suave y elástico ideal para entrenar o uso diario.",
    images: [
      "img/1.png",
      "img/2.png"
    ]
  },
  {
    name: "Dynamic Short",
    price: 30,
    color: "Coco",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o combinar.",
    images: [
      "img/12.png",
      "img/11.png"
    ]
  },
  {
    name: "Dynamic Short",
    price: 30,
    color: "Dusk",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o combinar.",
    images: [
      "img/6.png",
      "img/5.png"
    ]
  },
  {
    name: "Dynamic Leggings",
    price: 35,
    color: "Coco",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/9.png",
      "img/10.png"
    ]
  },
  {
    name: "Dynamic Leggings",
    price: 35,
    color: "Dusk",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/4.png",
      "img/3.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Light Rose Pink",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/365.png",
      "img/366.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Blossom",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/367.png",
      "img/368.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Winter Berry",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/369.png",
      "img/370.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Pine Green",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/371.png",
      "img/372.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Truffle",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/373.png",
      "img/374.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Warm Espresso",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/375.png",
      "img/376.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Electric Blue",
    category: "tops",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/377.png",
      "img/378.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Ink",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/379.png",
      "img/380.png"
    ]
  },
  {
    name: "Impact short sleeve Top",
    price: 35,
    color: "Midnight Black",
    category: "tops",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Top deportivo de manga corta con ajuste ceñido y tejido suave y elástico. Cómodo y versátil para entrenar o uso diario.",
    images: [
      "img/381.png",
      "img/382.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Blossom",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "entrega_inmediata",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/399.png",
      "img/400.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Chilli",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/387.png",
      "img/388.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Electric Blue",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/389.png",
      "img/390.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Light Rose Pink",
    category: "leggings",
    sizeStock: {
      XS: "entrega_inmediata",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/391.png",
      "img/392.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Pine Green",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/397.png",
      "img/398.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Truffle",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/395.png",
      "img/396.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Winter Berry",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "entrega_inmediata",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/383.png",
      "img/384.png"
    ]
  },
  {
    name: "Impact Leggings",
    price: 35,
    color: "Midnight Black",
    category: "leggings",
    sizeStock: {
      XS: "bajo_pedido",
      S: "bajo_pedido",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Leggings deportivos de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/393.png",
      "img/394.png"
    ]
  },
  {
    name: "Impact Shorts",
    price: 30,
    color: "Ink Blue",
    category: "shorts",
    sizeStock: {
      XS: "bajo_pedido",
      S: "entrega_inmediata",
      M: "bajo_pedido",
      L: "bajo_pedido",
      XL: "bajo_pedido"
    },
    description: "Short deportivo de tiro alto con pretina ancha y ajuste esculpido. Tejido suave y elástico de alta comodidad para entrenar o uso diario.",
    images: [
      "img/359.png",
      "img/360.png"
    ]
  },





];