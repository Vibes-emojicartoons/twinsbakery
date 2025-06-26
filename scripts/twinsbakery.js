  // Cart functionality
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;

        // File upload functionality
        document.getElementById('file-upload').addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file selected';
            document.getElementById('file-name').textContent = fileName;
        });

        // Add to cart functions
        function addSelectedToCart(type) {
            let selectedItem = null;
            let quantity = 1;
            let price = 0;
            let description = '';

            switch(type) {
                case 'queens':
                case 'scones':
                case 'biscuits':
                    // Get the selected checkbox
                    const checkboxes = document.querySelectorAll(`input[type="checkbox"][id^="${type}-"]`);
                    for (let checkbox of checkboxes) {
                        if (checkbox.checked) {
                            selectedItem = checkbox;
                            break;
                        }
                    }

                    if (!selectedItem) {
                        alert('Please select an option');
                        return;
                    }

                    // Get quantity
                    quantity = parseInt(document.getElementById(`${type}-quantity`).value) || 1;
                    price = parseFloat(selectedItem.dataset.price) * quantity;
                    description = `${selectedItem.value} x ${quantity}`;
                    break;

                case 'mixedgoodies':
                    // Get the selected checkbox
                    const mixedCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="mixed-"]');
                    for (let checkbox of mixedCheckboxes) {
                        if (checkbox.checked) {
                            selectedItem = checkbox;
                            break;
                        }
                    }

                    if (!selectedItem) {
                        alert('Please select an option');
                        return;
                    }

                    price = parseFloat(selectedItem.dataset.price);
                    description = selectedItem.value;
                    break;

                case '1tire-cake':
                    if (!document.getElementById('1tire-cake').checked) {
                        alert('Please select this cake option');
                        return;
                    }

                    const occasion1 = document.getElementById('occasion1').value;
                    const size1 = document.getElementById('size1').value;
                    const flavour1 = document.getElementById('flavour1').value;

                    if (!occasion1 || !size1 || !flavour1) {
                        alert('Please fill all cake details');
                        return;
                    }

                    const sizeOption1 = document.getElementById('size1').options[document.getElementById('size1').selectedIndex];
                    price = parseFloat(sizeOption1.dataset.price);
                    description = `1 Tire Cake - ${occasion1}, ${size1}, ${flavour1}`;
                    break;

                case '2tire-cake':
                    if (!document.getElementById('2tire-cake').checked) {
                        alert('Please select this cake option');
                        return;
                    }

                    const occasion2 = document.getElementById('occasion2').value;
                    const size2 = document.getElementById('size2').value;
                    const topFlavour2 = document.getElementById('top-flavour2').value;
                    const bottomFlavour2 = document.getElementById('bottom-flavour2').value;

                    if (!occasion2 || !size2 || !topFlavour2 || !bottomFlavour2) {
                        alert('Please fill all cake details');
                        return;
                    }

                    const sizeOption2 = document.getElementById('size2').options[document.getElementById('size2').selectedIndex];
                    price = parseFloat(sizeOption2.dataset.price);
                    description = `2 Tire Cake - ${occasion2}, ${size2}, Top: ${topFlavour2}, Bottom: ${bottomFlavour2}`;
                    break;

                case 'banto3':
                    if (!document.getElementById('banto3').checked) {
                        alert('Please select this cake option');
                        return;
                    }

                    const occasion3 = document.getElementById('occasion3').value;
                    const size3 = document.getElementById('size3').value;
                    const flavour3 = document.getElementById('flavour3').value;

                    if (!occasion3 || !size3 || !flavour3) {
                        alert('Please fill all cake details');
                        return;
                    }

                    const sizeOption3 = document.getElementById('size3').options[document.getElementById('size3').selectedIndex];
                    price = parseFloat(sizeOption3.dataset.price);
                    description = `Banto Cake - ${occasion3}, ${size3}, ${flavour3}`;
                    break;

                case 'cup-cakes':
                    if (!document.getElementById('cup-cakes').checked) {
                        alert('Please select this cake option');
                        return;
                    }

                    const occasion4 = document.getElementById('occasion4').value;
                    const cupcakeQuantity = document.getElementById('cupcake-quantity').value;
                    const flavour4 = document.getElementById('flavour4').value;
                    const model = document.getElementById('model').value;

                    if (!occasion4 || !cupcakeQuantity || !flavour4 || !model) {
                        alert('Please fill all cake details');
                        return;
                    }

                    if (parseInt(cupcakeQuantity) < 12) {
                        alert('Minimum of 12 cupcakes required');
                        return;
                    }

                    const modelOption = document.getElementById('model').options[document.getElementById('model').selectedIndex];
                    price = parseFloat(modelOption.dataset.price) * parseInt(cupcakeQuantity);
                    description = `Muffin Cake - ${occasion4}, ${cupcakeQuantity} cupcakes, ${flavour4}, ${model}`;
                    break;

                case 'topping':
                    // Handle toppings
                    const toppings = [];
                    let toppingPrice = 0;

                    // Letters
                    if (document.getElementById('letters').checked) {
                        const qty = parseInt(document.getElementById('quantity-letters').value) || 1;
                        toppingPrice += 5 * qty;
                        toppings.push(`Letters x${qty}`);
                    }

                    // Polystyren Balls
                    if (document.getElementById('polystyren').checked) {
                        const qty = parseInt(document.getElementById('quantity-polystyren').value) || 1;
                        toppingPrice += 5 * qty;
                        toppings.push(`Polystyren Balls x${qty}`);
                    }

                    // Flower Stem
                    if (document.getElementById('flower').checked) {
                        const qty = parseInt(document.getElementById('quantity-flower').value) || 1;
                        toppingPrice += 5 * qty;
                        toppings.push(`Flower Stem x${qty}`);
                    }

                    // Cake Print
                    if (document.getElementById('cakeprint').checked) {
                        toppingPrice += 150;
                        toppings.push('Cake Print');
                    }

                    // Cup Cake Print
                    if (document.getElementById('cup-print').checked) {
                        toppingPrice += 250;
                        toppings.push('Cup Cake Print');
                    }

                    // Custom Topping
                    if (document.getElementById('customtopping').checked) {
                        toppingPrice += 250;
                        toppings.push('Custom Topping');
                    }

                    if (toppings.length === 0) {
                        alert('Please select at least one topping');
                        return;
                    }

                    price = toppingPrice;
                    description = `Toppings: ${toppings.join(', ')}`;
                    break;
            }

            // Add to cart
            cart.push({
                description: description,
                price: price
            });

            cartCount++;
            cartTotal += price;

            // Update UI
            updateCartUI();

            // Show success message
            alert('Item added to cart!');
        }

        // Function to remove item from cart
        function removeFromCart(index) {
            // Subtract the price of the removed item from the total
            cartTotal -= cart[index].price;

            // Remove the item from the cart array
            cart.splice(index, 1);

            // Decrement the cart count
            cartCount--;

            // Update the UI
            updateCartUI();
        }

        function updateCartUI() {
            // Update cart count
            document.getElementById('cart-count').textContent = cartCount;

            // Update cart display
            const cartDisplay = document.getElementById('cart-display');

            if (cart.length === 0) {
                cartDisplay.innerHTML = '<p class="text-gray-500">Your cart is empty.</p>';
            } else {
                let html = '';
                cart.forEach((item, index) => {
                    html += `
                        <div class="flex justify-between items-center py-3 border-b border-gray-200">
                            <div class="flex-1">
                                <div class="item-description">${item.description}</div>
                                <div class="item-price font-medium text-pink-600">R${item.price.toFixed(2)}</div>
                            </div>
                            <button onclick="removeFromCart(${index})" class="ml-4 text-red-500 hover:text-red-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                });
                cartDisplay.innerHTML = html;
            }

            // Update total
            document.getElementById('cart-total').textContent = `R${cartTotal.toFixed(2)}`;
        }

        function sendWhatsApp() {
            if (cart.length === 0) {
                alert('Your cart is empty. Please add items before sending.');
                return;
            }

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('delivery-date').value;
            const description = document.getElementById('description').value;

            if (!name || !phone || !email || !date) {
                alert('Please fill in all required customer details.');
                return;
            }

            // Format cart items for message
            let cartItems = '';
            cart.forEach(item => {
                cartItems += `- ${item.description}: R${item.price.toFixed(2)}\n`;
            });

            const message = `Hello Tweens Bakery!\n\nI would like to place an order:\n\nCustomer Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDelivery/Pickup Date: ${date}\n\nOrder Details:\n${cartItems}\nTotal: R${cartTotal.toFixed(2)}\n\nSpecial Instructions:\n${description || 'None'}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);

            // Create WhatsApp link
            const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

            // Open in new tab
            window.open(whatsappLink, '_blank');
        }

        // Initialize the cart UI
        updateCartUI();