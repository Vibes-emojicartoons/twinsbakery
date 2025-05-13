   // Cart functionality
   let cart = [];
   let total = 0;
   
   // Update cart count display
   function updateCartCount() {
       const cartCount = document.getElementById('cart-count');
       cartCount.textContent = cart.length;
   }
   
   // Update cart display
   function updateCartDisplay() {
       const cartDisplay = document.getElementById('cart-display');
       const cartTotal = document.getElementById('cart-total');
       
       if (cart.length === 0) {
           cartDisplay.innerHTML = '<p class="text-gray-600">Your cart is empty.</p>';
           cartTotal.textContent = 'R0.00';
           return;
       }
       
       let cartHTML = '<div class="space-y-2">';
       cart.forEach((item, index) => {
           cartHTML += `
               <div class="flex justify-between items-center border-b pb-2">
                   <div>
                       <span class="font-medium">${item.name}</span>
                       ${item.options ? `<span class="text-sm text-gray-600">${item.options}</span>` : ''}
                       ${item.quantity > 1 ? `<span class="text-sm text-gray-600">x${item.quantity}</span>` : ''}
                   </div>
                   <div class="flex items-center">
                       <span class="font-bold mr-4">R${item.price.toFixed(2)}</span>
                       <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">
                           <i class="fas fa-times"></i>
                       </button>
                   </div>
               </div>
           `;
       });
       cartHTML += '</div>';
       
       cartDisplay.innerHTML = cartHTML;
       cartTotal.textContent = `R${total.toFixed(2)}`;
   }
   
   // Add item to cart
   function addToCart(name, price, options = '', quantity = 1) {
       cart.push({
           name,
           price: price * quantity,
           options,
           quantity
       });
       
       total += price * quantity;
       updateCartCount();
       updateCartDisplay();
   }
   
   // Remove item from cart
   function removeFromCart(index) {
       total -= cart[index].price;
       cart.splice(index, 1);
       updateCartCount();
       updateCartDisplay();
   }
   
   // Add selected items to cart based on section
   function addSelectedToCart(section) {
       switch(section) {
           case 'queens':
               const queensCheckbox = document.querySelector('.checkbox-queens:checked');
               if (!queensCheckbox) {
                   alert('Please select a Queens option');
                   return;
               }
               const queensQuantity = document.querySelector('#queens .quantity-input').value;
               addToCart(
                   'Queens Mini Cakes',
                   parseFloat(queensCheckbox.dataset.price),
                   queensCheckbox.value,
                   parseInt(queensQuantity)
               );
               break;
               
           case 'scones':
               const sconesCheckbox = document.querySelector('.checkbox-scones:checked');
               if (!sconesCheckbox) {
                   alert('Please select a Scones option');
                   return;
               }
               const sconesQuantity = document.querySelector('#scones .quantity-input').value;
               addToCart(
                   'Scones',
                   parseFloat(sconesCheckbox.dataset.price),
                   sconesCheckbox.value,
                   parseInt(sconesQuantity)
               );
               break;
               
           case 'biscuits':
               const biscuitsCheckbox = document.querySelector('.checkbox-biscuits:checked');
               if (!biscuitsCheckbox) {
                   alert('Please select a Biscuits option');
                   return;
               }
               const biscuitsQuantity = document.querySelector('#biscuits .quantity-input').value;
               addToCart(
                   'Biscuits',
                   parseFloat(biscuitsCheckbox.dataset.price),
                   biscuitsCheckbox.value,
                   parseInt(biscuitsQuantity)
               );
               break;
               
               case 'mixedgoodies':
                const mixedCheckbox = document.querySelector('.checkbox-mixedgoodies:checked');
                if (!mixedCheckbox) {
                    alert('Please select a Mixed Goodies option');
                    return;
                }
                addToCart(
                    'Mixed Goodies',
                    parseFloat(mixedCheckbox.dataset.price),
                    mixedCheckbox.value
                );
                break;
               
           case '1tire-cake':
               const oneTireCheckbox = document.getElementById('1tire-cake');
               if (!oneTireCheckbox.checked) {
                   alert('Please select the 1 Tire Cake option');
                   return;
               }
               const occasion1 = document.getElementById('occasion1').value;
               const size1 = document.getElementById('size1');
               const flavour1 = document.getElementById('flavour1').value;
               
               if (!occasion1 || !size1.value || !flavour1) {
                   alert('Please fill all required fields for 1 Tire Cake');
                   return;
               }
               
               const options1 = `${occasion1}, ${size1.options[size1.selectedIndex].text}, ${flavour1}`;
               addToCart(
                   '1 Tire Cake',
                   parseFloat(size1.options[size1.selectedIndex].dataset.price),
                   options1
               );
               break;
               
           case '2tire-cake':
               const twoTireCheckbox = document.getElementById('2tire-cake');
               if (!twoTireCheckbox.checked) {
                   alert('Please select the 2 Tire Cake option');
                   return;
               }
               const occasion2 = document.getElementById('occasion2').value;
               const size2 = document.getElementById('size2');
               const topFlavour2 = document.getElementById('top-flavour2').value;
               const bottomFlavour2 = document.getElementById('bottom-flavour2').value;
               
               if (!occasion2 || !size2.value || !topFlavour2 || !bottomFlavour2) {
                   alert('Please fill all required fields for 2 Tire Cake');
                   return;
               }
               
               const options2 = `${occasion2}, ${size2.options[size2.selectedIndex].text}, Top: ${topFlavour2}, Bottom: ${bottomFlavour2}`;
               addToCart(
                   '2 Tire Cake',
                   parseFloat(size2.options[size2.selectedIndex].dataset.price),
                   options2
               );
               break;
               
           case 'banto3':
               const bantoCheckbox = document.getElementById('banto3');
               if (!bantoCheckbox.checked) {
                   alert('Please select the Banto Cake option');
                   return;
               }
               const occasion3 = document.getElementById('occasion3').value;
               const size3 = document.getElementById('size3');
               const flavour3 = document.getElementById('flavour3').value;
               
               if (!occasion3 || !size3.value || !flavour3) {
                   alert('Please fill all required fields for Banto Cake');
                   return;
               }
               
               const options3 = `${occasion3}, ${size3.options[size3.selectedIndex].text}, ${flavour3}`;
               addToCart(
                   'Banto Cake',
                   parseFloat(size3.options[size3.selectedIndex].dataset.price),
                   options3
               );
               break;
               
           case 'cup-cakes':
               const cupCakesCheckbox = document.getElementById('cup-cakes');
               if (!cupCakesCheckbox.checked) {
                   alert('Please select the Cup Cakes option');
                   return;
               }
               const occasion4 = document.getElementById('occasion4').value;
               const quantity = document.querySelector('#cupcakes input[type="number"]').value;
               const flavour4 = document.getElementById('flavour4').value;
               const model = document.getElementById('model');
               
               if (!occasion4 || !quantity || quantity < 12 || !flavour4 || !model.value) {
                   alert('Please fill all required fields for Cup Cakes (minimum 12)');
                   return;
               }
               
               const options4 = `${occasion4}, ${quantity} cakes, ${flavour4}, ${model.options[model.selectedIndex].text}`;
               addToCart(
                   'Cup Cakes',
                   parseFloat(model.options[model.selectedIndex].dataset.price) * parseInt(quantity),
                   options4,
                   parseInt(quantity)
               );
               break;
               
           case 'topping':
               // Handle toppings
               const toppings = [];
               let toppingTotal = 0;
               
               // Letters
               const lettersCheckbox = document.getElementById('letters');
               if (lettersCheckbox.checked) {
                   const lettersQuantity = parseInt(document.getElementById('quantity-letters').value);
                   const lettersPrice = parseFloat(lettersCheckbox.dataset.price) * lettersQuantity;
                   toppings.push(`Letters x${lettersQuantity}`);
                   toppingTotal += lettersPrice;
               }
               
               // Polystyren Balls
               const polystyrenCheckbox = document.getElementById('polystyren');
               if (polystyrenCheckbox.checked) {
                   const polystyrenQuantity = parseInt(document.getElementById('quantity-polystyren').value);
                   const polystyrenPrice = parseFloat(polystyrenCheckbox.dataset.price) * polystyrenQuantity;
                   toppings.push(`Polystyren Balls x${polystyrenQuantity}`);
                   toppingTotal += polystyrenPrice;
               }
               
               // Flower Stem
               const flowerCheckbox = document.getElementById('flower');
               if (flowerCheckbox.checked) {
                   const flowerQuantity = parseInt(document.getElementById('quantity-flower').value);
                   const flowerPrice = parseFloat(flowerCheckbox.dataset.price) * flowerQuantity;
                   toppings.push(`Flower Stem x${flowerQuantity}`);
                   toppingTotal += flowerPrice;
               }
               
               // Cake Print
               const cakePrintCheckbox = document.getElementById('cakeprint');
               if (cakePrintCheckbox.checked) {
                   const cakePrintPrice = parseFloat(cakePrintCheckbox.dataset.price);
                   toppings.push('Cake Print');
                   toppingTotal += cakePrintPrice;
               }
               
               // Cup Cake Print
               const cupPrintCheckbox = document.getElementById('cup-print');
               if (cupPrintCheckbox.checked) {
                   const cupPrintPrice = parseFloat(cupPrintCheckbox.dataset.price);
                   toppings.push('Cup Cake Print');
                   toppingTotal += cupPrintPrice;
               }
               
               // Custom Topping
               const customToppingCheckbox = document.getElementById('customtopping');
               if (customToppingCheckbox.checked) {
                   const customToppingPrice = parseFloat(customToppingCheckbox.dataset.price);
                   toppings.push('Custom Topping');
                   toppingTotal += customToppingPrice;
               }
               
               if (toppings.length === 0) {
                   alert('Please select at least one topping');
                   return;
               }
               
               addToCart(
                   'Cake Toppings',
                   toppingTotal,
                   toppings.join(', ')
               );
               break;
               
           default:
               alert('Invalid section');
       }
   }
   
   // Send quotation via WhatsApp
   function sendWhatsApp() {
       if (cart.length === 0) {
           alert('Your cart is empty. Please add items before sending.');
           return;
       }
       
       const name = document.getElementById('name').value;
       const phone = document.getElementById('phone').value;
       const email = document.getElementById('email').value;
       const deliveryDate = document.getElementById('delivery-date').value;
       const description = document.getElementById('description').value;
       
       if (!name || !phone || !email || !deliveryDate) {
           alert('Please fill all required customer information fields');
           return;
       }
       
       // Format cart items for WhatsApp message
       let message = `*New Cake Order Request*\n\n`;
       message += `*Customer Details:*\n`;
       message += `Name: ${name}\n`;
       message += `Phone: ${phone}\n`;
       message += `Email: ${email}\n`;
       message += `Delivery/Pickup Date: ${deliveryDate}\n\n`;
       
       if (description) {
           message += `*Special Instructions:*\n${description}\n\n`;
       }
       
       message += `*Order Summary:*\n`;
       cart.forEach(item => {
           message += `- ${item.name}`;
           if (item.options) message += ` (${item.options})`;
           if (item.quantity > 1) message += ` x${item.quantity}`;
           message += ` - R${item.price.toFixed(2)}\n`;
       });
       
       message += `\n*Total: R${total.toFixed(2)}*`;
       
       // Encode message for WhatsApp URL
       const whatsappNumber= '27734063449';
       const encodedMessage = encodeURIComponent(message);
       const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
       
       // Open WhatsApp in new tab
       window.open(whatsappUrl, '_blank');
   }
   
   // Send quotation via Email (simulated)
   function sendEmail() {
       if (cart.length === 0) {
           alert('Your cart is empty. Please add items before sending.');
           return;
       }
       
       const name = document.getElementById('name').value;
       const phone = document.getElementById('phone').value;
       const email = document.getElementById('email').value;
       const deliveryDate = document.getElementById('delivery-date').value;
       const description = document.getElementById('description').value;
       
       if (!name || !phone || !email || !deliveryDate) {
           alert('Please fill all required customer information fields');
           return;
       }
       
       // In a real implementation, this would send an actual email
       alert('Email functionality would send the order details to the bakery. In a real implementation, this would connect to an email service or backend.');
       
       // For demo purposes, we'll just show a confirmation
       console.log('Order details would be sent via email to the bakery');
   }
   
   // File upload display
   document.getElementById('file-upload').addEventListener('change', function(e) {
       const fileName = e.target.files[0] ? e.target.files[0].name : 'No file selected';
       document.getElementById('file-name').textContent = fileName;
   });
   
   // Initialize the page
   document.addEventListener('DOMContentLoaded', function() {
       updateCartCount();
       updateCartDisplay();
       
       // Set minimum date for delivery date picker to today
       const today = new Date().toISOString().split('T')[0];
       document.getElementById('delivery-date').min = today;
   });