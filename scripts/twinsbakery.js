function getCakeSummary(section) {
    let summary = '';
  
    const label = section.querySelector('label');
    summary += `\nCake Type: ${label ? label.textContent : 'N/A'}\n`;
  
    const occasion = section.querySelector('.occasion');
    if (occasion && occasion.value) {
      summary += `Occasion: ${occasion.value}\n`;
    }
  
    const size = section.querySelector('.size');
    if (size && size.value) {
      const selectedSize = size.options[size.selectedIndex];
      const price = selectedSize.getAttribute('data-price') || '0.00';
      summary += `Size: ${size.value} - R${price}\n`;
    }
  
    const topFlavour = section.querySelector('.top-flavour');
    const bottomFlavour = section.querySelector('.bottom-flavour');
    const flavour = section.querySelector('.flavour');
  
    if (topFlavour && bottomFlavour) {
      summary += `Top Flavour: ${topFlavour.value}\n`;
      summary += `Bottom Flavour: ${bottomFlavour.value}\n`;
    } else if (flavour && flavour.value) {
      summary += `Flavour: ${flavour.value}\n`;
    }
  
    const quantityInput = section.querySelector('.quantity');
    const model = section.querySelector('.model');
  
    if (quantityInput && model) {
      const quantity = parseInt(quantityInput.value, 10);
      const selectedModel = model.options[model.selectedIndex];
      const modelPrice = parseFloat(selectedModel.getAttribute('data-price') || '0');
  
      if (!isNaN(quantity) && modelPrice) {
        const total = quantity * modelPrice;
        summary += `Quantity: ${quantity}\n`;
        summary += `Model: ${selectedModel.value} - R${modelPrice} each\n`;
        summary += `Total Price: R${total.toFixed(2)}\n`;
      }
    }
  
    return summary;
  }
  
  function addToChatCombined() {
    let chatOutput = '';
    let totalPrice = 0;
  
    // === MINI CAKES SECTION ===
    const miniCakeSections = document.querySelectorAll('.mini-cake-section');
    miniCakeSections.forEach(section => {
      const title = section.getAttribute("data-type") || "Mini Cake";
      const checkboxes = section.querySelectorAll(".checkbox:checked");
      const quantityInput = section.querySelector(".quantity-input");
      const quantity = parseInt(quantityInput?.value || "1", 10);
  
      if (checkboxes.length > 0) {
        let sectionOutput = `🧁 Mini Cake Type: ${title}\n`;
        checkboxes.forEach(box => {
          const item = box.value;
          const price = parseFloat(box.getAttribute("data-price") || "0");
          sectionOutput += `- ${item} x${quantity} - R${(price * quantity).toFixed(2)}\n`;
          totalPrice += price * quantity;
        });
        chatOutput += sectionOutput + '\n';
      }
    });
  
    // === MIXED GOODIES ===
    const mixedCheckboxes = document.querySelectorAll('.checkbox-mixedgoodies');
    let mixedOutput = '';
    mixedCheckboxes.forEach(box => {
      if (box.checked) {
        const item = box.value;
        const price = parseFloat(box.getAttribute('data-price') || '0');
        mixedOutput += `🍬 ${item} - R${price.toFixed(2)}\n`;
        totalPrice += price;
      }
    });
    if (mixedOutput) {
      chatOutput += `🎁 Mixed Goodies:\n${mixedOutput}\n`;
    }
  
    // === CAKES AND CUPCAKES ===
    const cakeSections = document.querySelectorAll('.bottom-celebration > div');
    cakeSections.forEach(section => {
      const checkbox = section.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        const cakeSummary = getCakeSummary(section);
        chatOutput += cakeSummary + '\n';
        // Get size price if available
        const size = section.querySelector('.size');
        if (size && size.value) {
          const selectedSize = size.options[size.selectedIndex];
          const price = parseFloat(selectedSize.getAttribute('data-price') || '0');
          totalPrice += price;
        }
      }
    });
  
    // === TOPPINGS ===
    const toppings = [
      { className: "letters", quantityClass: "quantity-letters" },
      { className: "polystyren", quantityClass: "quantity-polystyren" },
      { className: "flower", quantityClass: "quantity-flower" },
    ];
    toppings.forEach(topping => {
      const checkbox = document.querySelector(`input.${topping.className}`);
      if (checkbox?.checked) {
        const quantity = parseInt(document.querySelector(`.${topping.quantityClass}`).value) || 1;
        const price = parseFloat(checkbox.dataset.price || 0);
        chatOutput += `✨ ${topping.className.charAt(0).toUpperCase() + topping.className.slice(1)} x${quantity} - R${(price * quantity).toFixed(2)}\n`;
        totalPrice += price * quantity;
      }
    });
  
    const otherToppings = [
      { className: "cakeprint", label: "Cake Print" },
      { className: "cup-print", label: "Cup Cake Print" },
      { className: "customtopping", label: "Custom Topping" },
    ];
    otherToppings.forEach(topping => {
      const checkbox = document.querySelector(`input.${topping.className}`);
      if (checkbox?.checked) {
        const price = parseFloat(checkbox.dataset.price || 0);
        chatOutput += `🎨 ${topping.label} - R${price.toFixed(2)}\n`;
        totalPrice += price;
      }
    });
  
    // === FINAL OUTPUT ===
    if (chatOutput.trim()) {
      alert("📝 Your Full Order:\n\n" + chatOutput + "\n💵 Total Price: R" + totalPrice.toFixed(2));
    } else {
      alert("Please select something to get a quote.");
    }
  }
  
