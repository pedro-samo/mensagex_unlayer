const products = [
  {
    id: 1231,
    title: "Xiaomi Redmi Note 11",
    price: 1319.00,
    description: "Smartphone Xiaomi Redmi Note 11 Dual 128gb 6gb Ram - Graphite Gray/cinza - Global Tela AMOLED Mergulhe em um mundo de maravilhas A tela retroiluminada oferece o que há de mais moderno em brilho, contraste, calibração de cores e resolução",
    image: "https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg",
    freeShipping: true,
  },
  {
    id: 1232,
    title: "Apple iPhone 13 Pro",
    price: 9156.07,
    oldPrice: 10000,
    description: "Tela Super Retina XDR de 6,1 polegadas com ProMotion para uma sensação mais rápida e responsiva",
    image: "https://m.media-amazon.com/images/I/51y+xXlXPrL._AC_SX679_.jpg",
  },
  {
    id: 1233,
    title: "Kindle 10a. geração",
    price: 426.55,
    oldPrice: 600,
    freeShipping: true,
    description: "Conheça o novo Kindle, agora com iluminação embutida ajustável, que permite que você leia em ambientes abertos ou fechados, a qualquer hora do dia. O Kindle possui uma tela sensível ao toque antirreflexo, até mesmo sob o sol. É como se você estivesse lendo em papel.",
    image: "https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_SX679_.jpg",
  },
  {
    id: 1234,
    title: "Echo Dot (4ª Geração)",
    price: 265.05,
    freeShipping: true,
    description: "Conheça o Echo Dot (4ª Geração): nosso smart speaker com Alexa de maior sucesso ainda melhor.",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SX679_.jpg",
  },
];

const isProduction = () => {
  const url = window.location.href;
  return url.includes('127.0.0.1') ? false : true;
}

unlayer.init({
  id: "editor",
  projectId: 82737,
  templateId: "180892",
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
  customCSS: isProduction() ? 'https://pedro-samo.github.io/productTool.css' : 'http://localhost:5500/productTool.css',
  customJS: isProduction() ? 'https://pedro-samo.github.io/productTool.js' : 'http://localhost:5500/productTool.js',
});