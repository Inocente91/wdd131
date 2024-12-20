document.addEventListener('DOMContentLoaded', function () {
  // Dynamically add products to the select dropdown
  const products = [
    { id: 1, name: 'iPhone 16' },
    { id: 2, name: 'iPhone 16 Pro' },
    { id: 3, name: 'iPhone 16 Pro Max' },
  ];

  const productSelect = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Dynamically update copyright and last modified date
  const currentYear = new Date().getFullYear();
  document.getElementById('copyrightYear').textContent = currentYear;

  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

  // Update review count in local storage
  if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
  }

  let reviewCount = parseInt(localStorage.getItem('reviewCount'));
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
  document.getElementById('reviewCount').textContent = reviewCount;
});
