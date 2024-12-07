// Array of temple objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg " 
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Tijuana Mexico Temple",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },
  {
    templeName: "Hermosillo Mexico Temple",
    location: "Hermosillo, Sonora, Mexico",
    dedicated: "2000, February, 27",
    area: 10769,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hermosillo-sonora-mexico-temple/hermosillo-sonora-mexico-temple-20644-main.jpg"
  },
  {
    templeName: "Monterrey Mexico Temple",
    location: "Monterrey, Nuevo Leon, Mexico",
    dedicated: "2002, April, 28",
    area: 10769,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
  },
];

// Function to render temples
function renderTemples(filter = "all") {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  const filteredTemples = temples.filter(temple => {
    if (filter === "old") return parseInt(temple.dedicated.split(",")[0]) < 1900;
    if (filter === "new") return parseInt(temple.dedicated.split(",")[0]) > 2000;
    if (filter === "large") return temple.area > 90000;
    if (filter === "small") return temple.area < 10000;
    return true; // Default to all temples
  });

  filteredTemples.forEach(temple => {
    const section = document.createElement("section");
    section.innerHTML = `
      <figure>
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sq. ft.</p>
        </figcaption>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </figure>
    `;
    container.appendChild(section);
  });
}

// Add filter event listeners
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const filter = event.target.getAttribute("data-filter");
    renderTemples(filter);
  });
});

// Initial render
renderTemples("all");

// Update copyright and last modified date
document.getElementById("copyrightYear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent = document.lastModified;


