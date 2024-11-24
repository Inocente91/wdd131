// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Get the copyright year element and set its content
document.getElementById('copyrightYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Get the last modified date element and set its content
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  // Only calculate if conditions are met
  if (temp <= 10 && windSpeed > 4.8) {
    // Wind chill formula (temperature in °C, wind speed in km/h)
    const windChill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2) + "°C"; // Return result formatted
  }
  return "N/A"; // Default if conditions not met
}

// Function to update weather data on the page
function updateWeather() {
  // Static values for temperature and wind speed
  const temperature = 15; // In Celsius
  const windSpeed = 10; // In km/h

  // Calculate wind chill
  const windChill = calculateWindChill(temperature, windSpeed);

  // Update the HTML content
  document.getElementById("temperature").textContent = `${temperature}°C`;
  document.getElementById("wind").textContent = `${windSpeed} km/h`;
  document.getElementById("windChill").textContent = windChill;
}

// Update weather data when the page loads
document.addEventListener("DOMContentLoaded", updateWeather);
