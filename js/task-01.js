//ВАРІАНТ 1
// const liItems = document.querySelectorAll("li.item");
// console.log(`Number of categiries : ${liItems.length}`);
// liItems.forEach(item => {
//     console.log(`Category : ${item.querySelector("h2").textContent}`);
//     console.log(`Elements : ${item.querySelector("ul").children.length}`);
// });

//ВАРІАНТ 2
const liItems2 = [...document.querySelector("ul#categories").children];
console.log(`Number of categiries : ${liItems2.length}`);
liItems2.forEach(item => {
    console.log(`Category : ${item.querySelector("h2").textContent}`);
    console.log(`Elements : ${item.querySelector("ul").children.length}`);
});