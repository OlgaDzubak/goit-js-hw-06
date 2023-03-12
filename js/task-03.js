const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector("ul.gallery");
let innerHTMLstr = "";

ulGallery.style.display = "flex";
ulGallery.style.listStyle = "none";
ulGallery.style.columnGap = "20px";

images.forEach((item) => { innerHTMLstr += `<li>\n <img src="${item.url}"\n alt="${item.alt}"\n width="400">\n</li>\n`;});
ulGallery.insertAdjacentHTML("afterbegin", innerHTMLstr);
