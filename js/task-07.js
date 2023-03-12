const inputControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

function setAtrSpan() { 
    spanText.setAttribute("style", `font-size: ${this.value}px`); 
}
inputControl.addEventListener('input', setAtrSpan);
