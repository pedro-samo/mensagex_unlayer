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
  customCSS: ["http://127.0.0.1:5500/productTool.css"],
  customJS: ["http://127.0.0.1:5500/productTool.js"],
});