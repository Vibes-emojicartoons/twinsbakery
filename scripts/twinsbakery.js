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
    const minicakeSection = document.getElementById('minicake');
    const mixedGoodiesSection = document.getElementById('mixedgoodies');
    const celebrationCakeSection = document.getElementById('celebrationcake');
    const cakeToppingSection = document.getElementById('cake-topping');

    
}