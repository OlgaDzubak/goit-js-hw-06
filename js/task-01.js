const liItems = document.querySelectorAll(".item");
console.log(liItems);
console.log(`Number of categiries : ${liItems.length}`);

liItems.forEach((item) => {
    console.log(`Category : ${item.querySelector("h2").textContent}`);
    console.log(`Elements : ${item.lastElementChild.children.length}`);
})