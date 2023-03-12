const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('div#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let innerStr = '';
  let width = 30;
  let height = 30;
  for (let i=1; i<=amount; i+=1){ 
    innerStr += `<div style="width:${width += 10}px; height:${height += 10}px; background-color:${getRandomHexColor()};"> </div>\n`
  };
  divBoxes.insertAdjacentHTML('afterbegin',innerStr);
}

function destroyBoxes(){
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener('click', () => {createBoxes(document.querySelector('input').value);});
btnDestroy.addEventListener('click', () => {destroyBoxes();});