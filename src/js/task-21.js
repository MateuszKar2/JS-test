//DOM (Document Object Model)- Łączy naszą stronę HTML z naszym programem

//tworzrzenie
// document.createElement(tagName);

//dodawanie

//usuwanie
// elem.remove();

//Aby wyświetlić dokument HTML, przeglądarka najpierw konwertuje go do formatu, który rozumie — DOM.
//Dwa rodzaję wezłów: węzły elementów i węzły tekstowe

// element.querySelector(selector);
//zwraca pierwszy element, jeżeli nie znajdzie zwraca null

// element.querySelectorAll(selector);
//zwraca pseudotablicę wszystkich elementów, jeżeli nic nie znajdzie zwróci pusta tablicę

const listWithId = document.querySelector("#menu");

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const firstelement = document.querySelector('.menu-item');
console.log(firstelement);
firstelement.style.color = 'blue';

//WŁAŚCIWOŚCI I ATRYBUTY
//value-zawiera aktualna wartość ele. formularza.(string)
//checked - przechowuje stan pola wyboru lub przycisku radiowego. (boolean)
//name - przechowuje wartość określoną w atrybucie HTML name. (string)
//src - ścieżka do obrazu znacznika <img>. (string)
//elem.textContent zwraca zawartość tekstową wewnątrz elementu.

const message = document.querySelector("#message");
console.log(message.value);

const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href);

const image = document.querySelector(".image");
console.log(image.src);
image.src = 'https://placeimg.com/640/480/tech';
console.log(image.src);
console.log(message.textContent);
//właściwość ,,classList" przechowuje obiekt z metodami pracy z klasami elementu

console.log(message.classList.contains("materialize-textarea"));

const btn = document.querySelector(".btn");
console.log(btn.classList.contains("btn"));

btn.classList.add("btn-2", "mojaNowaKlasa");
console.log(btn.classList);

btn.classList.remove("btn-2");
console.log(btn.classList);

btn.classList.toggle("btn-2");
console.log(btn.classList);

btn.classList.replace("btn-2", "btn-3");
console.log(btn.classList);

//włąściwość ,,style" służy do odczytywania i zmiany stylów wbudowanych (inline)

console.log(listWithId);
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '30px';
listWithId.style.color = 'red';

//atrybuty

console.log(image.hasAttribute("src"));
console.log(image.hasAttribute("btn"));

console.log(image.getAttribute("src"));

image.setAttribute("alt", "amazingnature");
console.log(image.getAttribute("alt"));

image.removeAttribute("alt");
console.log(image.getAttribute("alt"));

console.log(image.attributes);


//atrybuty data

const saveBtn = document.querySelector('button[data-action="save"]')
console.log(saveBtn.dataset.action);
const closeBtn = document.querySelector('button[data-action="close"]')
console.log(closeBtn.dataset.action);

//Jest kilka sposobów na
//tworzenie i usuwanie elementów
//Pierwszym z nich jest 

//I.tworzenie

const heading = document.createElement("h1");
console.log(heading);
heading.textContent = "This is Warsaw"
console.log(heading);

//II.dodawanie

saveBtn.after(heading);
saveBtn.before(closeBtn);

//III.usuwanie

saveBtn.remove();

//drugim jest wykorzystanie właściwośći innerHTML: 


//I.czytanie

const article = document.querySelector("article");
article.style.color = "black";

console.log(article.innerHTML);

const title = document.querySelector(".title");
console.log(title.innerHTML);

const text = document.querySelector(".text");
console.log(text.innerHTML);

//II.zmiana

title.innerHTML = 'New and forever I am';
title.style.color = "green";
console.log(title.innerHTML);

//III.uwuwanie/wyczyszczeni(wystarczy podać pusty string)
// title.innerHTML = "";

//IV.dodawanie
const myString = `<p class="my-string">here</p>`
title.innerHTML += myString;
console.log(title);

//metoda ,,insertAdjacentHTML", przyjmuje 4 pozycje
// elem.insertAdjacentHTML(position, string);
title.insertAdjacentHTML("afterbegin", myString);

//ŁADOWANIE STRINGÓW
//Atrybut defer
//<script defer src="path-to-script.js"></script>
//Atrybut async
//<script async src="path-to-script.js"></script>