const btn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const span = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => { 
  const color = getRandomHexColor();
  body.setAttribute("style", `background-color: ${color}`);
  span.textContent = color;  
}

btn.addEventListener('click', changeColor);