const flightBoxes = document.querySelectorAll('.flight-box');
let currentIndex = 0;

function showBox(index) {
  flightBoxes.forEach((box, i) => {
    box.classList.remove('active');
    if (i === index) {
      box.classList.add('active');
    }
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % flightBoxes.length; // Loop back to the first
  showBox(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + flightBoxes.length) % flightBoxes.length; // Loop back to the last
  showBox(currentIndex);
});

// Initial display
showBox(currentIndex);
