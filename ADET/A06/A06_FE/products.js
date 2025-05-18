var categories = [];
var products = [];

const getAllCategories = async () => {
  fetch('http://localhost/kentdrlo.github.io/ADET/A06/A06_BE/categories.php')
    .then((response) => response.json())
    .then((data) => {
      categories = data;
      loadCategories();
    });
};

const getAllProducts = async (categoryID) => {
  const categoryData = {
    categoryID: categoryID,
  };

  fetch('http://localhost/kentdrlo.github.io/ADET/A06/A06_BE/products.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      loadProducts();
    });
};

getAllCategories();

var total = 0;

function loadCategories() {
  var selectionsContainer = document.getElementById("categories");
  categories.forEach((category) => {
    selectionsContainer.innerHTML +=
      `<div onclick="getAllProducts('` +
      category.categoryID +
      `')" class="card mx-5 my-4 btnBottomContent p-3 text-center">
      <div> ` +
      category.name +
      ` </div>
      </div>
        `;
  });
}

function loadProducts(categoryID) {
  var mainContainer = document.getElementById("varietyContainer");
  mainContainer.innerHTML = "";

  products.forEach((product) => {
    mainContainer.innerHTML +=
      `
        <div onclick="addToReceipt('` +
      product.price +
      `','` +
      product.acronym +
      `')" class="card mx-5 mt-5 btnMainContent text-center">
          <div class="d-flex justify-content-center">
            <img src="../../A04/resources/images/` +
      product.image +
      `" class="img-fluid" style="width: 80px; height: 80px; margin-top: -10px; margin-bottom: 10px;">
          </div>
            <div class="selectionName">` +
      product.name +
      `</div>
            <div class="selectionPrice">₱ ` +
      product.price +
      `.00</div>

        </div>
        `;
  });
}

function addToReceipt(price, acronym) {
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(price);

  totalPriceValue = document.getElementById("totalValue");
  totalPriceValue.innerHTML = "₱ " + total + ".00";

  receiptContainer.innerHTML +=
    `
        <div class="d-flex flex-row justify-content-between">
            <div class="acronym"><small>` +
    acronym +
    `</small></div>
            <div class="receiptPrice"><small>₱ ` +
    price +
    `.00</small></div>
        </div>
    `;
}
