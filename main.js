const products = [
  {
    id: 1231,
    title: "Xícara",
    price: 50.3,
    description: "lalalal0",
    image: "https://www.alpha-mos.com/sites/default/files/alphamos/images/sensory-analysis-coffee-tea.jpg",
  },
  {
    id: 1232,
    title: "Xícara2",
    price: 50.3,
    description: "lalalal0",
    image: "https://www.alpha-mos.com/sites/default/files/alphamos/images/sensory-analysis-coffee-tea.jpg",
  },
];

unlayer.init({
  id: "editor",
  projectId: 82737,
  templateId: "[180490]",
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
  customCSS: ["https://raw.githubusercontent.com/pedro-samo/mensagex_unlayer/master/productTool.css?token=GHSAT0AAAAAABVJTBTLNVDJQMXBBPNI6T2CYU5AIEA"],
  customJS: ["https://raw.githubusercontent.com/pedro-samo/mensagex_unlayer/master/productTool.js?token=GHSAT0AAAAAABVJTBTLWKWFK3WSGYIW4X7GYU5AINA"],
});