const isProduction = () => {
  const url = window.location.href;
  return url.includes('127.0.0.1') ? false : true;
}

let products = [];
let token = '';

unlayer.init({
  id: "editor",
  projectId: 82737,
  templateId: "180892",
  displayMode: "email",
  tools: {
    "custom#product_tool": {
      data: {
        products
      },
      properties: {
        productLibrary: {
          editor: {
            data: {
              products,
              token,
            },
          },
        },
      },
    },
  },
  customCSS: isProduction() ? 'https://pedro-samo.github.io/productTool.css' : 'http://localhost:5500/productTool.css',
  customJS: isProduction() ? 'https://pedro-samo.github.io/productTool.js' : 'http://localhost:5500/productTool.js',
});