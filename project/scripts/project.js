// JavaScript to interact with DOM and handle events

// Dynamically update copyright and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('copyrightYear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

document.addEventListener('DOMContentLoaded', function() {
  // Example of localStorage usage
  if (!localStorage.getItem('visited')) {
      alert("Welcome to Gamer's Haven! Check out the latest game reviews and tips.");
      localStorage.setItem('visited', 'true');
  }

  // Event listener example: Changing background color on click
  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('click', function() {
      heroSection.style.backgroundColor = '#FF6600';  // Change color when clicked
  });
});
