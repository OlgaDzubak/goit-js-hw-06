let counterValue = 0;
const button_dec = document.querySelector('button[data-action ="decrement"]');
const button_inc = document.querySelector('button[data-action ="increment"]');
const span = document.querySelector("span");

button_dec.addEventListener("click", ()=>{span.textContent = --counterValue;});
button_inc.addEventListener("click", ()=>{span.textContent = ++counterValue;});