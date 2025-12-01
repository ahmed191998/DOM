// Select only the inner card-body that contains controls
const products = document.querySelectorAll('.list-products > .card-body > .card > .card-body');

function updateTotal() {
  let total = 0;
  products.forEach((product) => {
    const price = parseInt(product.querySelector('.unit-price').textContent);
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    total += price * quantity;
  });
  document.querySelector('.total').textContent = total + ' $';
}

// Loop through each product
products.forEach((product) => {
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const quantityEl = product.querySelector('.quantity');
  const deleteBtn = product.querySelector('.fa-trash-alt');
  const likeBtn = product.querySelector('.fa-heart');

  // Increase quantity by 1
  plusBtn.addEventListener('click', () => {
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateTotal();
  });

  // Decrease quantity by 1 (minimum 0)
  minusBtn.addEventListener('click', () => {
    if (parseInt(quantityEl.textContent) > 0) {
      quantityEl.textContent = parseInt(quantityEl.textContent) - 1;
      updateTotal();
    }
  });

  // Delete product card
  deleteBtn.addEventListener('click', () => {
    product.parentElement.parentElement.remove(); // remove the whole card
    updateTotal();
  });

  // Toggle like button color
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });
});

// Initialize total
updateTotal();
