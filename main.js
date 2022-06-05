const products = [
  {
    id: 1231,
    title: "Xiaomi Redmi Note 11",
    price: 1319.00,
    description: "Smartphone Xiaomi Redmi Note 11 Dual 128gb 6gb Ram - Graphite Gray/cinza - Global Tela AMOLED Mergulhe em um mundo de maravilhas A tela retroiluminada oferece o que há de mais moderno em brilho, contraste, calibração de cores e resolução",
    image: "https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg",
  },
  {
    id: 1232,
    title: "Apple iPhone 13 Pro",
    price: 9156.07,
    description: "Tela Super Retina XDR de 6,1 polegadas com ProMotion para uma sensação mais rápida e responsiva",
    image: "https://m.media-amazon.com/images/I/51y+xXlXPrL._AC_SX679_.jpg",
  },
];

unlayer.init({
  id: "editor",
  projectId: 82737,
  templateId: "180490",
  displayMode: "email",
  tools: {
    "custom#product_tool": {
      data: {
        products,
      },
      properties: {
        productLibrary: {
          editor: {
            data: {
              products,
            },
          },
        },
      },
    },
  },
  customCSS: [
    'https://examples.unlayer.com/examples/product-library-tool/productTool.css',
  ],
  customJS: [
    'https://examples.unlayer.com/examples/product-library-tool/productTool.js',
  ],
});