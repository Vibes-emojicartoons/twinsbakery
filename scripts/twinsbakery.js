// twinsbakery.js//
let cart=[];
let totalCost = 0;
const cartCountSpan = document.getElementById('cart-count');
const totalCostSpan = document.getElementById('total-cost');
const selectedItemsList = document.getElementById('selected-items');
const fileInput = document.getElementById('file-upload');
const fileNameDisplay = document.getElementById('file-name');
const chatDisplay = document.getElementById('cart-display');

// Update the cart count on navigation//
function updateCartCount() {
  cartCountSpan.textContent = cart.length;
}

// Fuction to add seleceted items to cart//
function addSelectedItemsToCart() {
    // let's work with mini cakes//
    const minicakeSection = document.getElementById('minicake');
    const minicakeChecked = minicakeSection.querySelector(".minicake").checked;




    // let's work with mixed goodies//
    const mixedGoodiesSection = document.getElementById('mixedgoodies');
    const mixedGoodiesChecked = mixedGoodiesSection.querySelector(".bottom-mixedgoodies").checked;


    // let's work with celebration cakes//
    const celebrationCakeSection = document.getElementById('celebrationcake');
    const celebrationCakeChecked = celebrationCakeSection.querySelector(".bottom-celebration").checked;


    // let's work with cake toppings//
    const cakeToppingSection = document.getElementById('cake-topping');
    const cakeToppingChecked = cakeToppingSection.querySelector(".topping").checked;

    
}