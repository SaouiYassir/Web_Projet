document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const sideBar = document.querySelector('.links_side_bar');
    const closeIcon = document.querySelector('.close_icon');
    
    menuBar.addEventListener('click', function() {
        sideBar.classList.add('open');
    });
    
    closeIcon.addEventListener('click', function() {
        sideBar.classList.remove('open');
    });
});

function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}

import old_products from "../API/old_spare_api.js"

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = old_products.find((p) => p.product_id == productId);

document.title = product.piece_Rechange + ` / ${product.carName} `;
document.querySelector(".banner h4").innerText = `Home > Old Car Spare Parts > ${product.carName} > ${product.piece_Rechange}`


let product_img = document.querySelector(".img");
product_img.src = product.image;


let carousel_image = document.querySelectorAll(".carousel_image");
carousel_image.forEach((image,index) => {
    image.src = product.otherImages[index]
    

  image.addEventListener("mouseenter", () => {
    product_img.src = image.src;
  });

  image.addEventListener("mouseout", () => {
    product_img.src = product.image;
  });
});

product.keyFeatures.forEach((key) => {
  let liste = document.createElement("li");
  liste.innerText = key;
  document.querySelector(".feature").appendChild(liste);
});

document.querySelector(".product_title").textContent = product.piece_Rechange;
document.querySelector(".carName").textContent = product.carName;
document.querySelector(".product_description p").textContent =
  product.description;
document.querySelector(".productPrice").textContent =
  "Price : $" + product.price;


// Amount Product ...
let amount = document.querySelector(".amount");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let value = Number(amount.innerText);


function updateButtons() {
  minus.disabled = value <= 0;
  plus.disabled = value >= 10;
}

plus.addEventListener("click", () => {
  if (value < 10) {
    value++;
    amount.innerText = value;
    updateButtons();
  }
});

minus.addEventListener("click", () => {
  if (value > 0) {
    value--;
    amount.innerText = value;
    updateButtons();
  }
});