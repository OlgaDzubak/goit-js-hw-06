const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liElements = [];
ingredients.forEach((item,idx) => {
  liElements.push(document.createElement("li"));
  liElements[idx].textContent = item;
  liElements[idx].className = "item";
});
document.querySelector("ul#ingredients").append(...liElements);
console.log(document);