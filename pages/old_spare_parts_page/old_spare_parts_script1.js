import old_products from "../API/old_spare_api.js"


let cards = document.getElementsByClassName("cards")[0];

old_products.forEach((product) => {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <div class="card_img">
            <img src="${product.image}" alt="${product.piece_Rechange}">
        </div>

        <div class="card_body">
            <div class="card_info">
                <div class="card_title">
                    <h5>${product.carName}</h5>
                    <span>${product.piece_Rechange}</span>
                </div>
                <div class="card_price">
                    <span>$${product.price}</span>
                </div>
            </div>

            <div class="card_button">
                <a href="product.html?id=${product.product_id}">View Details</a>
            </div>
        </div>
    `;

  cards.appendChild(card);
});


let carsLists = document.querySelectorAll(".carousel_container ul li");
let cardsContainer = document.querySelector(".cards");
let activeFilters = [];


carsLists.forEach((car) => {
  car.addEventListener("click", () => {
    car.classList.toggle("active");

    const carName = car.innerText;    

    if (car.classList.contains("active")) {
      activeFilters.push(carName);
    } else {
      activeFilters = activeFilters.filter((name) => name !== carName);
    }

    // Filter products
    let filteredProducts;
    if (activeFilters.length === 0) {
      filteredProducts = old_products; // if my Filtring Array is clean show me all my products
    } else {
      filteredProducts = old_products.filter((myProduct) =>
        
        activeFilters.includes(myProduct.carName)
      );
    }

    cardsContainer.innerHTML = "";

    filteredProducts.forEach((p) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card_img">
            <img src="${p.image}" alt="${p.piece_Rechange}">
        </div>

        <div class="card_body">
            <div class="card_info">
                <div class="card_title">
                    <h5>${p.carName}</h5>
                    <span>${p.piece_Rechange}</span>
                </div>
                <div class="card_price">
                    <span>$${p.price}</span>
                </div>
            </div>

            <div class="card_button">
                <a href="product.html?id=${p.product_id}">View Details</a>
            </div>
        </div>
    `;
      cards.appendChild(card);
    });
  });
});
