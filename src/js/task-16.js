//spread , składnia "..." zwraca, rozpakowuje tablicę czyli rozkłada jej elementy na oddzielne argumenty

const temps = [3, 5, 1324, 3, 454, 34, 9];

console.log(temps);

//nie zadziała
console.log(Math.max(temps));

//zadziała
console.log(Math.max(...temps));


const oneTemps = [1, 3, 45, 65, 2];

const twoTemps = [5, 7, 43, 90, 9];

const threeTemps = [...oneTemps, ...twoTemps];
console.log(threeTemps);

// const threeTemps = [...twoTemps,...oneTemps];
// console.log(threeTemps);

//nazwa właściwości jest unikalna i jej wartość można nadpisać 

//destrukturyzacja obiektów

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  console.log(book);

  console.log(book.title);

  const { 
    //zmiana nazyw zmiennej(tylko podczas destrukturyzacji)
    title, 
    author: ourAuthor, 
    genres, 
    isPublic, 
    rating} = book;

    //dostęp do zmiennej po destrukturyzacji jest czystszy
console.log(title);

    //zmiana nazwy zmiennej
console.log(ourAuthor);

//Destrukturyzacja tablic
//Nawiasy [], zamiast {}
//KOlejność zmiennych będzie miała znaczenie

const rgba = [150, 204, 58];

let red, green, blue;

[red, green, blue] = rgba;

console.log(`R: ${red}, G: ${green}, B ${blue}`);

const rgbb = [150, 204, 58];

const [black, ...colors] = rgbb;

console.log(black);
console.log(colors);





