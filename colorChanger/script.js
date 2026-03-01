const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

const randomColorButton = document.querySelector("#randomColorButton");
randomColorButton.addEventListener("click", function (event) {
  const randomNum = Math.random() * 16;
  const str = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += str[Math.floor(randomNum)];
  }
  body.style.backgroundColor = randomColor;
});
// buttons.forEach((button) => {
