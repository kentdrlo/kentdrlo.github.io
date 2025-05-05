var total = 0;
var contents = [
  {
    "selections": "Ice Cream Flavors",
    "options": [
      {
        "name": "Vanilla",
        "acronym": "VAN",
        "image": "vanilla.png",
        "price": 50
      },
      {
        "name": "Chocolate",
        "acronym": "CHO",
        "image": "choco.png",
        "price": 50
      },
      {
        "name": "Strawberry",
        "acronym": "STR",
        "image": "strawberry.png",
        "price": 55 
      },
      {
        "name": "Matcha",
        "acronym": "MAT",
        "image": "matcha.png",
        "price": 60
      },
      {
        "name": "Cookies & Cream",
        "acronym": "CNC",
        "image": "cnc.png",
        "price": 55
      },
      {
        "name": "Mango",
        "acronym": "MNG",
        "image": "mango.png",
        "price": 50
      },
      {
        "name": "Rocky Road",
        "acronym": "RRD",
        "image": "rockyroad.png",
        "price": 60
      },
      {
        "name": "Ube",
        "acronym": "UBE",
        "image": "ube.png",
        "price": 60
      },
      {
        "name": "Bubblegum",
        "acronym": "BBG",
        "image": "bubblegum.png",
        "price": 55
      }
    ]
  },
  {
    "selections": "Toppings & Add-ons",
    "options": [
      {
        "name": "Chocolate Syrup",
        "acronym": "CHS",
        "image": "chocosyrup.png",
        "price": 10
      },
      {
        "name": "Caramel Syrup",
        "acronym": "CRS",
        "image": "caramelsyrup.png",
        "price": 10
      },
      {
        "name": "Rainbow Sprinkles",
        "acronym": "RSP",
        "image": "springkles.png",
        "price": 10
      },
      {
        "name": "Crushed Oreos",
        "acronym": "ORE",
        "image": "oreo.png",
        "price": 15
      },
      {
        "name": "Marshmallow",
        "acronym": "MSH",
        "image": "marshmallow.png",
        "price": 10
      },
      {
        "name": "Stick-O",
        "acronym": "STO",
        "image": "stick-o.png",
        "price": 10
      },
      {
        "name": "Banana Slices",
        "acronym": "BNS",
        "image": "banana.png",
        "price": 10
      },
      {
        "name": "Whipped Cream",
        "acronym": "WHC",
        "image": "whippedcream.png",
        "price": 10
      },
      {
        "name": "Chopped Nuts",
        "acronym": "NUT",
        "image": "nut.png",
        "price": 15
      }
    ]
  },
  {
    "selections": "Available Scoop Counts",
    "options": [
      {
        "name": "Single Scoop",
        "image": "single.png",
        "acronym": "SSP",
        "price": 10
      },
      {
        "name": "Double Scoop",
        "acronym": "DSP",
        "image": "double.png",
        "price": 20
      },
      {
        "name": "Triple Scoop",
        "acronym": "TSP",
        "image": "triple.png",
        "price": 30
      },
      {
        "name": "Mega Scoop",
        "acronym": "MSP",
        "image": "mega.png",
        "price": 40
      },
      {
        "name": "Your Own Scoop",
        "acronym": "BSP",
        "image": "own.png",
        "price": 50
      }
    ]
  },
  {
    "selections": "Ice Cream Holder",
    "options": [
      {
        "name": "Waffle Cone",
        "acronym": "WFL",
        "image": "waffle.png",
        "price": 10
      },
      {
        "name": "Bread (Sandwich)",
        "acronym": "BRD",
        "image": "bread.png",
        "price": 10
      },
      {
        "name": "CUP",
        "acronym": "CUP",
        "image": "cup.png",
        "price": 10
      },
      {
        "name": "Wafer Cone",
        "acronym": "WAF",
        "image": "wafer.png",
        "price": 5
      },
      {
        "name": "Pint (Takeout Tub)",
        "acronym": "PNT",
        "image": "pint.png",
        "price": 20
      },
      {
        "name": "Quart (Big Tub)",
        "acronym": "QRT",
        "image": "quart.png",
        "price": 30
      }
    ]
  },
  {
    "selections": "More Snacks & Treats",
    "options": [
      {
        "name": "Chocolate Cookie",
        "acronym": "CCC",
        "image": "chococookie.png",
        "price": 25
      },
      {
        "name": "Double Choco Cookie",
        "image": "dccookie.png",
        "acronym": "DCC",
        
        "price": 30
      },
      {
        "name": "Brownies",
        "acronym": "BRW",
        "image": "brownies.png",
        "price": 20
      },
      {
        "name": "Mini Donut (3 pcs)",
        "acronym": "MND",
        "image": "donut.png",
        "price": 30
      },
      {
        "name": "Waffle Sticks",
        "acronym": "WFS",
        "image": "wafflesticks.png",
        "price": 20
      }
    ]
  },
  {
    "selections": "Drinks to Chill With",
    "options": [
      {
        "name": "Milkshake",
        "acronym": "MKL",
        "image": "milkshake.png",
        "price": 60
      },
      {
        "name": "Iced Tea",
        "acronym": "ICT",
        "image": "icedtea.png",
        "price": 30
      },
      {
        "name": "Milk Tea",
        "acronym": "MLT",
        "image": "milktea.png",
        "price": 40
      },
      {
        "name": "Bottled Water",
        "acronym": "BTW",
        "image": "water.png",
        "price": 20
      },
      {
        "name": "Softdrink",
        "acronym": "SDC",
        "image": "softdrink.png",
        "price": 30
      },
      {
        "name": "Ice Cream Float",
        "acronym": "FLT",
        "image": "float.png",
        "price": 65
      },
      {
        "name": "Ice Coffee",
        "acronym": "ICF",
        "image": "icedcoffee.png",
        "price": 50
      },
      {
        "name": "Choco Frappe",
        "acronym": "CFP",
        "image": "frappe.png",
        "price": 60
      }
    ]
  }
];


function loadProducts() {
  var selectionsContainer = document.getElementById("productsContainer");
  contents.forEach((content, index) => {
    selectionsContainer.innerHTML +=
      `
            <div onclick="loadOptions('` +
      index +
      `')" class="card mx-5 my-4 btnBottomContent p-3 text-center">
                <div> ` +
      content.selections +
      ` </div>
            </div>
        `;
  });
}

function loadOptions(categoryIndex) {
  var mainContainer = document.getElementById("varietyContainer");
  mainContainer.innerHTML = "";

  contents[categoryIndex].options.forEach((option) => {
    mainContainer.innerHTML +=
      `
        <div onclick="addToReceipt('`+ option.price + `','` + option.acronym + `')" class="card mx-5 mt-5 btnMainContent text-center">
          <div class="d-flex justify-content-center">
            <img src="resources/images/`+ option.image + `" class="img-fluid" style="width: 80px; height: 80px; margin-top: -10px; margin-bottom: 10px;">
          </div>
            <div class="selectionName">` + option.name + `</div>
            <div class="selectionPrice">₱ ` + option.price + `.00</div>

        </div>
        `;
  });
}

function addToReceipt(price, acronym) {
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(price);

  totalPriceValue = document.getElementById("totalValue");
  totalPriceValue.innerHTML = '₱ ' + total + '.00';

  receiptContainer.innerHTML += `
        <div class="d-flex flex-row justify-content-between">
            <div class="acronym"><small>`+ acronym + `</small></div>
            <div class="receiptPrice"><small>₱ `+ price + `.00</small></div>
        </div>
    `;
}

loadProducts();