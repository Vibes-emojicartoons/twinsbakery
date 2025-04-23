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
    let total = 0;
    let output = "Cake Order Summary:\n";


    if (document.getElementById(minicake-options).checked){
        
        const output = document.getElementById("cart-display");
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const price = parseFloat (checkbox.getAttribute("data-price"));
            const total = price * quantity;
            totalPrice += total;
            summary += '<p>${checkbox.value} - R${price.toFixed(2)} x ${quantity} = <strong>R${total.toFixed(2)}</strong></p>';

        });
        const quantityInput = document.querySelector(".quantity-input");
        const quantity = parseInt(quantityInput.value, 10) || 1;
        if ( checkboxes.length ===0){
            alert('Please select at least one option in ${title}.');
            return;
        }
        
    }
}