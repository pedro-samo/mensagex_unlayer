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
        products,
      },
      properties: {
        productLibrary: {
          editor: {
            data: {
              products,
              token
            },
          },
        },
      },
    },
  },
  customCSS: [
    "https://mensagex.com.br/sistema/jscript/products/productTool.css",
  ],
  customJS: [
    "https://mensagex.com.br/sistema/jscript/products/productTool.js",
  ],
});
