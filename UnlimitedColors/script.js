// Function to generate random color
function randomColor() {
  const str = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;

// Start button
const startColorButton = function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

// Stop button
const stopColorButton = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startColorButton);
document.querySelector("#stop").addEventListener("click", stopColorButton);
