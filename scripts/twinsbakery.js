// Wait until the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Array to store items selected by the user
    const selectedItems = [];
    // Store the total cost
    let totalCost = 0;

    // This function updates the list of selected items and total cost
    function updateQuotation() {
        const itemList = document.getElementById('selected-items');
        const costDisplay = document.getElementById('total-cost');

        // Clear the item list
        itemList.innerHTML = '';

        // Loop through each selected item and add it to the list
        selectedItems.forEach(item => {
            const listItem = document.createElement('li');
            const quantity = item.quantity || 1;
            listItem.textContent = `${name} ${item.name} (x${quantity}) - R${(item.price * quantity).toFixed(2)}`;
            itemList.appendChild(listItem);
        });

        // Show the total cost
        costDisplay.textContent = totalCost.toFixed(2);
    }

    // This function is called when the user clicks "Add to Cart"
    window.addSelectedToCart = () => {
        // --------- Mini Cakes ---------
        const miniCakes = document.querySelectorAll('#minicake .minicake');
        miniCakes.forEach(miniCake => {
            const checkboxes = miniCake.querySelectorAll('input[type="checkbox"]:checked');
            const quantityInput = miniCake.querySelector('.quantity-input');
            const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

            checkboxes.forEach(checkbox => {
                const name = checkbox.value;
                const price = parseFloat(checkbox.dataset.price);
                const existing = selectedItems.find(item => item.name === name && item.price === price);

                if (existing) {
                    existing.quantity += quantity;
                } else {
                    selectedItems.push({ name, price, quantity });
                }

                totalCost += price * quantity;
                checkbox.checked = false;
                if (quantityInput) quantityInput.value = 1;
            });
        });

        // --------- Mixed Goodies ---------
        const goodies = document.querySelectorAll('#mixedgoodies .bottom-mixedgoodies > div');
        goodies.forEach(div => {
            const checkbox = div.querySelector('input[type="checkbox"]:checked');
            if (checkbox) {
                const name = checkbox.value;
                const price = parseFloat(checkbox.dataset.price);
                const existing = selectedItems.find(item => item.name === name && item.price === price);

                if (existing) {
                    existing.quantity += 1;
                } else {
                    selectedItems.push({ name, price, quantity: 1 });
                }

                totalCost += price;
                checkbox.checked = false;
            }
        });

        // --------- Cake Toppings ---------
        const toppings = document.querySelectorAll('#cake-topping .topping > div');
        toppings.forEach(div => {
            const checkbox = div.querySelector('input[type="checkbox"]:checked');
            const quantityInput = div.querySelector('input[type="number"]');
            const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

            if (checkbox) {
                const name = checkbox.labels[0].textContent.split(':')[0].trim();
                const price = parseFloat(checkbox.dataset.price);
                const existing = selectedItems.find(item => item.name === name && item.price === price);

                if (existing) {
                    existing.quantity += quantity;
                } else {
                    selectedItems.push({ name, price, quantity });
                }

                totalCost += price * quantity;
                checkbox.checked = false;
                if (quantityInput) quantityInput.value = 1;
            }
        });

        updateQuotation();
    };

    // This function is called when the user clicks "Send Quotation"
    window.sendQuotation = () => {
        if (selectedItems.length === 0) {
            alert("You haven't selected any items.");
            return;
        }

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const description = document.getElementById('description').value;
        const fileInput = document.getElementById('file-upload');
        const file = fileInput ? fileInput.files[0] : null;

        if (!name || !email || !phone) {
            alert("Please fill in your name, email, and phone.");
            return;
        }

        const quotation = {
            name,
            email,
            phone,
            description,
            items: selectedItems,
            totalCost,
            inspirationImage: file ? file.name : null
        };

        // Normally, you would send this data to a server using fetch()
        console.log("Quotation Sent:", quotation);
        alert("Thank you! We received your request.");

        // Reset everything
        selectedItems.length = 0;
        totalCost = 0;
        updateQuotation();

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('description').value = '';
        document.getElementById('file-name').textContent = '';
    };

    // Show the uploaded file name
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');

    if (fileInput) {
        fileInput.addEventListener('change', () => {
            fileNameDisplay.textContent = fileInput.files[0]?.name || '';
        });
    }
});
