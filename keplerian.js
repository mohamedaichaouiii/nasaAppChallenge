document.addEventListener("DOMContentLoaded", function() {
    // Get the form and input elements
    const eccentricityInput = document.getElementById("eccentricity");
    const semiMajorAxisInput = document.getElementById("semiMajorAxis");
    const inclinationInput = document.getElementById("inclination");
    const trueAnomalyInput = document.getElementById("trueAnomaly");
    const plotButton = document.getElementById("plotButton");
    const resultDiv = document.getElementById("result");
  
    // Function to calculate the Keplerian distance
    function calculateKeplerianDistance(a, e, theta) {
      // Convert theta to radians since trigonometric functions use radians
      const thetaRadians = (theta * Math.PI) / 180;
  
      // Keplerian distance equation: r = (a * (1 - e^2)) / (1 + e * cos(theta))
      const distance = (a * (1 - Math.pow(e, 2))) / (1 + e * Math.cos(thetaRadians));
  
      return distance;
    }
  
    // Function to handle the button click
    plotButton.addEventListener("click", function() {
      const eccentricity = parseFloat(eccentricityInput.value);
      const semiMajorAxis = parseFloat(semiMajorAxisInput.value);
      const trueAnomaly = parseFloat(trueAnomalyInput.value);
  
      // Check if all inputs are valid numbers
      if (!isNaN(eccentricity) && !isNaN(semiMajorAxis) && !isNaN(trueAnomaly)) {
        const distance = calculateKeplerianDistance(semiMajorAxis, eccentricity, trueAnomaly);
  
        // Display the result
        resultDiv.innerHTML = `
          <h3>Calculated Keplerian Distance:</h3>
          <p>At a true anomaly of ${trueAnomaly}°, the distance (r) is approximately: ${distance.toFixed(2)} units.</p>
        `;
      } else {
        resultDiv.innerHTML = "<p>Please enter valid values for all fields.</p>";
      }
    });
  });
  