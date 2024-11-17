// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Get the copyright year element and set its content
document.getElementById('copyrightYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Get the last modified date element and set its content
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

document.querySelector('.menu-toggle').addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  const toggleButton = this;

  // Toggle the 'show' class on the menu
  menu.classList.toggle('show');

  // Change the button text based on menu visibility
  if (menu.classList.contains('show')) {
    toggleButton.textContent = '✖'; // Show "X" when the menu is open
  } else {
    toggleButton.textContent = '☰'; // Show hamburger icon when the menu is closed
  }
});
