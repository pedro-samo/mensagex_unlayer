const toolTemplate = function (values, isViewer = false) {
    return `<div style="position: relative; display: block;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d3d3d3;
  border-radius: 0.25rem; 
  margin: auto;
  text-align: center;" class="product-card">
  <img style="width: ${
      values.autoWidth.width
  }; object-fit: contain; border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; margin: 0 auto;" src="${
        values.productImage.url
    }" />
  <div style="padding: 0 1rem 1rem; text-align: left;" class="product-card-body">
    <h3 class="m-0" style="color: ${
        values.productTitleColor
    }; margin: 1rem 0 0.7rem 0 !important;">${values.productTitle}</h3>
    <div class="description">${values.productDescription}</div>
  </div>
  <div style="display: block; border-bottom-left-radius: 0.25rem; border-bottom-right-radius: 0.25rem; border-top: 1px solid rgba(0, 0, 0, 0.125); align-items: center; font-weight: bold; border-top: transparent !important;
  margin-bottom: 10px;" class="product-footer">
    <div style="color: ${values.productPriceColor}; background-color: ${
        values.productPriceBackgroundColor
    }; font-size: 16px;
    margin-bottom: 5px;
    padding: 5px 10px;
    width: auto !important;
    border-bottom-left-radius: 0.25rem;     width: 100%;
    border-radius: 5px;" >
      ${promocionalPrice(values.produtctOldPrice)}
      R$ ${values.productPrice.toString().replace(".", ",")}
    </div>
    ${freeShipping(values.productFreeShipping)}
    <a style="display: inline-block; font-weight: 400; text-align: center; vertical-align: middle;
    background-color: transparent; border: 1px solid transparent; border-radius: 0.25rem; font-size: 1rem;
    line-height: 1.5; white-space: nowrap; width: calc(100% - 40px); background-color: ${
        values.productCTAColor
    }; color: ${
        values.productCTATextColor
    }; cursor: pointer; border-radius: 5px;"class="button no-underline" href="${
        values.productCTAAction.url
    }" target="${values.productCTAAction.target}">
      ${values.productCTA}
    </a>
  </div>
</div>
${isViewer ? modalTemplate({ products: values.data.products }) : ""}
`;
};

const modalTemplate = function (data) {
    return `
  <div class="modal" id="product_library_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Biblioteca de Produtos</h3>
          <button class="close" onclick="hideModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="search-box">
            <input type="text" class="form-control" placeholder="Busque pelo nome" id="search-bar" style="width: 75%" />
            <button id="search-btn" class="button" style="width: 24%">Pesquisar</button>
          </div>
          <div class="products-list">
            ${productItemsTemplate(data)}
          </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
`;
};

const productItemsTemplate = _.template(`
<% _.forEach(products, function(item) { %>
<div class="product-item" id="product-item" data-uuid='<%= item.id %>' data-title="<%= item.title %>" data-price="<%= item.price %>" data-image="<%= item.image %>" data-description="<%= item.description %>" >
<img src="<%= item.image %>" style="max-height: 300px;min-height: 300px;width: 100%;" />
  <h4 style="margin: 0.5rem 0; text-align: left;"><%= item.title %></h4>
  <h4 class="product-price" style="margin: 0.5rem 0; text-align: left;">R$ <%= item.price %></h4>
  <p style="text-align: left;"><%= item.description %></p>
</div>
<% }); %>
`);

const promocionalPrice = (value) => {
    if (!value) return `<span></span>`;
    else
        return `<span style= "font-size: 13px; text-decoration: line-through; margin-right: 10px;" class="product-oldprice"> De: R$ ${value} </span>`;
};

const freeShipping = (value) => {
    if (!value) return `<span class="product-freeShipping"></span>`;
    else
        return `<span style= "color: #14a020; font-size: 15px; min-height: 23px; margin-bottom: 5px;" class="product-freeShipping"> Frete Grátis </span>`;
};

const editorTemplate = `<button id="addProduct" class="button">Pesquisar Produtos</button>`;

const showModal = function () {
    const modal = document.getElementById("product_library_modal");
    modal.classList.add("show");
};

const hideModal = function () {
    const modal = document.getElementById("product_library_modal");
    modal.classList.remove("show");
};

unlayer.registerTool({
    name: "product_tool",
    label: "Produto",
    icon: "fa-tag",
    supportedDisplayModes: ["web", "email"],
    options: {
        productContent: {
            title: "Container do Produto",
            position: 1,
            options: {
                productLibrary: {
                    label: "Adicione Produtos da Loja",
                    defaultValue: "",
                    widget: "product_library",
                },
                productImage: {
                    label: "Imagem do Produto",
                    defaultValue: {
                        url: "https://s3.amazonaws.com/unroll-images-production/projects%2F6553%2F1604576441796-339575",
                    },
                    widget: "image",
                },
                autoWidth: {
                    label: "Auto Width",
                    defaultValue: {
                        autoWidth: true,
                        width: "100%",
                    },
                    widget: "auto_width",
                },
                productTitle: {
                    label: "Título do Produto",
                    defaultValue: "Título do Produto",
                    widget: "text",
                },
                productTitleColor: {
                    label: "Cor do Título do Produto",
                    defaultValue: "#000000",
                    widget: "color_picker",
                },
                productDescription: {
                    label: "Descrição do Produto",
                    defaultValue:
                        "Aqui vai a descrição do seu produto. Clique no box para editar e deixar do seu jeito.",
                    widget: "rich_text",
                },
                productPrice: {
                    label: "Preço do Produto",
                    defaultValue: "7.99",
                    widget: "text",
                },
                produtctOldPrice: {
                    label: "Preço Sem Desconto",
                    defaultValue: "12.00",
                    widget: "text",
                },
                productPriceColor: {
                    label: "Cor do Preço do Produto",
                    defaultValue: "#000000",
                    widget: "color_picker",
                },
                productPriceBackgroundColor: {
                    label: "Cor de Fundo Preço do Produto",
                    defaultValue: "#ffffff",
                    widget: "color_picker",
                },
                productFreeShipping: {
                    label: "Fréte Grátis",
                    defaultValue: false,
                    widget: "toggle",
                },
                productCTA: {
                    label: "Texto do Botão",
                    defaultValue: "Comprar",
                    widget: "text",
                },
                productCTAColor: {
                    label: "Cor do Botão",
                    defaultValue: "#2DC268",
                    widget: "color_picker",
                },
                productCTATextColor: {
                    label: "Texto da Cor do Botão",
                    defaultValue: "#ffffff",
                    widget: "color_picker",
                },
                productCTAAction: {
                    label: "Tipo da Ação",
                    defaultValue: {
                        name: "web",
                        values: {
                            href: "http://google.com",
                            target: "_blank",
                        },
                    },
                    widget: "link",
                },
            },
        },
    },
    transformer: (values, source) => {
        const { name, value, data } = source;
        // Transform the values here
        // We will update selected values in property editor here
        let newValues =
            name === "productLibrary"
                ? {
                      ...values,
                      productTitle: value.selected.title,
                      produtctOldPrice: value.selected.oldPrice,
                      productPrice: value.selected.price,
                      productDescription: value.selected.description,
                      productFreeShipping: value.selected.freeShipping,
                      productImage: {
                          url: value.selected.image,
                      },
                      productCTAAction: {
                          name: "web",
                          values: {
                              href: value.selected.url,
                              target: "_blank",
                          },
                      },
                  }
                : {
                      ...values,
                  };

        // Return updated values
        return newValues;
    },
    values: {},
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return toolTemplate(values, true);
            },
        }),
        exporters: {
            web: function (values) {
                return toolTemplate(values);
            },
            email: function (values) {
                return toolTemplate(values);
            },
        },
        head: {
            // As we need custom styling in export as well that's why we put those styles here
            css: function (values) {
                return `      
        .button {
          display: inline-block;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
          background-color: transparent;
          border: 1px solid transparent;
          border-radius: 0.25rem;
          padding: .75rem;
          font-size: 1rem;
          line-height: 1.5;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          background-color: rgb(0, 123, 255);
          cursor: pointer;
        }

        .m-0 {
          margin: 0px;
        }

        .no-underline {
          text-decoration: none;
        }

        .no-border-radius {
          border-radius: 0px;
        }
        `;
            },
            js: function (values) {},
        },
    },
});

let productList = [];

const getProduct = async (title, userToken) => {
    const notFoundText = document.querySelector(".not-found");
    if (notFoundText) notFoundText.remove();

    if (!title) return;

    const searchButton = document.getElementById("search-btn");
    searchButton.innerText = "Pesquisando...";

    clearResults();

    const removeSpecialCharacters = (title) => {
        return title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const replaceDot = () => {
        const prices = document.querySelectorAll(".product-price");
        prices.forEach((price) => {
            const newPrice = price.innerText.replace(".", ",");
            price.innerText = newPrice;
        });
    };

    try {
        const url = `http://localhost/s/ecomm/products/search?title=${removeSpecialCharacters(
            title
        )}&token=${userToken}`;
        // const url = `https://mensagex.com.br/s/ecomm/products/search/pedro?title=${removeSpecialCharacters(title)}`
        const response = await fetch(url);
        const data = await response.json();
        productList = data;
        showApiResponse(data, title);
    } catch (e) {
        const list = document.querySelector(
            "#product_library_modal .products-list"
        );
        const node = document.createElement("span");
        node.classList.add("not-found");
        node.innerText = `Ops... ocorreu um erro. Tente novamente`;
        list.appendChild(node);
    } finally {
        replaceDot();
        const searchButton = document.getElementById("search-btn");
        searchButton.innerText = "Pesquisar";
    }
};

const clearResults = () => {
    const list = document.querySelector(
        "#product_library_modal .products-list"
    );

    let productsListHtml;

    if (list) {
        productsListHtml = productItemsTemplate({
            products: [],
        });
        list.innerHTML = productsListHtml;
    }
};

const showApiResponse = (productList, title) => {
    const list = document.querySelector(
        "#product_library_modal .products-list"
    );

    if (!productList.length) {
        const node = document.createElement("span");
        node.classList.add("not-found");
        node.innerText = `Nenhum resultado encontrado para ${title}.`;
        return list.appendChild(node);
    }

    let productsListHtml;

    if (list && productList.length > 0) {
        productsListHtml = productItemsTemplate({
            products: productList,
        });
        list.innerHTML = productsListHtml;
    }
};

const hideAutoWidth = () => {
    const component = document.querySelector(".blockbuilder-auto-width-widget");
    component.previousElementSibling.remove();
    component.remove();
};

unlayer.registerPropertyEditor({
    name: "product_library",
    layout: "bottom",
    Widget: unlayer.createWidget({
        render(value, updateValue, data) {
            return editorTemplate;
        },
        mount(node, value, updateValue, data) {
            hideAutoWidth();
            var addButton = node.querySelector("#addProduct");
            addButton.onclick = function () {
                showModal();
                setTimeout(() => {
                    // We are using event bubling to capture clicked item instead of registering click event on all product items.
                    var selectButton = document.querySelector(".products-list");
                    if (!selectButton) return;
                    selectButton.onclick = function (e) {
                        if (e.target.id === "product-item") {
                            // If user clicks on product item
                            // Find selected item from products list
                            const selectedProduct = productList.find(
                                (item) =>
                                    item.id === parseInt(e.target.dataset.uuid)
                            );
                            updateValue({ selected: selectedProduct });
                        } else {
                            // If user click on child of product item (e.g. title, price, image or desctiption)
                            const parent = e.target.parentElement;
                            if (parent && parent.id !== "product-item") return;
                            const selectedProduct = productList.find(
                                (item) =>
                                    item.id === parseInt(parent.dataset.uuid)
                            );
                            updateValue({ selected: selectedProduct });
                        }
                        hideModal();
                        // This is a hack to close property editor right bar on selecting an item from products list.
                        var outerBody = document.querySelector("#u_body");
                        outerBody.click();
                    };
                    /* Register event listeners for search */
                    var searchButton = document.querySelector("#search-btn");
                    var searchBarValue = document.getElementById("search-bar");
                    searchButton.onclick = function (e) {
                        getProduct(searchBarValue.value, data.token);
                    };
                    searchBarValue.addEventListener("keypress", (e) => {
                        if (e.key === "Enter") {
                            getProduct(searchBarValue.value, data.token);
                        }
                    });
                }, 200);
            };
        },
    }),
});
