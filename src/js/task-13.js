//Tablice//

const colors = ["red", "blue", "green", "yellow", "red"];
const myColor = "red";
let message

console.log(colors);

console.log(colors[3]);

console.log(colors[0]);

console.log(colors.length);

//Iteracja po tablicy//

for (let i=0; i < colors.length; i++ ) {
    console.log(colors[i]);
}

for (const color of colors ) {
    console.log(color);
    if (color !== myColor) {
        message = "It is not red";
        break;
    }
}

//Metody tablicowe

const nameMy = "Jerzy"

console.log(nameMy.split(""));

const words = ["JavaScript", "is", "super"];

console.log(words.join(" "))

console.log(words.indexOf("is"));

console.log(words.includes("is"));

const numbers = [5, 4];

numbers.push(1);
console.log(numbers);

numbers.push(2);
console.log(numbers);

numbers.pop(1);
console.log(numbers);

numbers.unshift(4);
console.log(numbers);

numbers.shift();
console.log(numbers);

const animals = ["cat", "dog", "duck", "horse", "fish"];

console.log(animals.slice(0, 2));
console.log(animals.slice(2, 5));

console.log(animals.splice(2, 2));
console.log(animals);

console.log(animals.splice(2, 0, "mouse"));
console.log(animals);

console.log(animals.splice(2, 1, "crab"));
console.log(animals);

console.log(words.concat(animals));