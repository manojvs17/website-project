const productCheckboxes = document.querySelectorAll('.product input[type="checkbox"]');
const productInputs = document.querySelectorAll('.product input[type="number"]');
const totalAmountElement = document.getElementById('total-amount-value');

function updateTotalAmount() {
  let totalAmount = 0;
  productCheckboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const price = parseFloat(checkbox.dataset.price);
      const quantity = parseInt(productInputs[index].value);
      totalAmount += price * quantity;
    }
  });
  totalAmountElement.textContent = totalAmount.toFixed(2);
}

productCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotalAmount);
});

productInputs.forEach(input => {
  input.addEventListener('change', updateTotalAmount);
});

// Call the updateTotalAmount function initially to set the initial total amount
updateTotalAmount();