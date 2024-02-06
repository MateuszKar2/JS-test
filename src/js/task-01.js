//Number of categories: 3

//Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const categories = document.querySelector('#categoies');
const items = document.querySelectorAll('.item');

console.log(`Number of categories ${items.length}`);

items.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("li").length;

console.log(`Category: ${title}`)
console.log(`Elements: ${elements}`)
});