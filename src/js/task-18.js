// //Funkcje z efektami ubocznymi 
// //Mnoży każdy el. tablicy array przez liczbę value
// //Modyfikuje (mutuje) orginalną tablicę przez referencje

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value
//     }
// };

// //Czysta funkcja
// //Przy tych samych argumentach zwraca ten sam wynik
// //Nie ma skutków ubocznych, czyli nie zmienia wartości argumentów

// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(e => newArray.push(e * value));

//     return newArray
// };

// const numbers = [1,2,3,4,5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);

// console.log(doubledNumbers);

// //Metoda .map() 
// //Przekształcenie

// const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

// console.log(planets);

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsWord = planets.map(planet => planet.split(""));
// console.log(planetsWord);


// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];

//   const studentSearch = students.find(student => student.name === "Ajax");
//   console.log(studentSearch);

//   const studentScore = students.map(student => student.score);
//   console.log(studentScore);

//   //Metoda .flatMap()
//   //Spłaszczenie

//   const people = [
//     { name: "Mango", courses: ["matematyka", "fizyka"] },
//     { name: "Poly", courses: ["informatyka", "matematyka"] },
//     { name: "Kiwi", courses: ["fizyka", "biologia"] },
//   ];

// const peopleCourses = people.map(people => people.courses);
// console.log(peopleCourses);
// // [['matematyka', 'fizyka'], ['informatyka', 'matematyka'], ['fizyka', 'biologia']]

// const peopleCoursesFlat = people.flatMap(people => people.courses);
// console.log(peopleCoursesFlat);
// // ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];

// //Metoda .filter()
// //Znajduje el. które spełniają warunek

// const values = [ 23, 89, -4, 24, 1, -90, -45];

// const positiveValue = values.filter(value => value >= 0);
// console.log(positiveValue);

// const otherValue = values.filter(value => value < 0 && value > -30);
// console.log(otherValue);

// const peopleCoursesUniques = peopleCoursesFlat.filter((course, index, array) => array.indexOf(course) === index);
// console.log(peopleCoursesUniques);

// //Metoda .find()
// //Znajduje pierwszy el. który spełnia warunek

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorSearch = colorPickerOptions.find(option => option.label === "blue");// { label: 'blue', color: '#2196F3' }
// console.log(colorSearch);


// //Metoda findIndex()
// //zaawansowany zamiennik indexOf()- (używana tylko w przypadakach ścisła równość ===)
// //Znajduje pierwszy el. które spełnia warunek i podaje jego index

// const colorFirst = colorPickerOptions.findIndex(option => option.label === "blue");//{2}
// console.log(colorFirst);

// const colorSecound = colorPickerOptions.findIndex(option => option.label === "black");//{-1}
// console.log(colorSecound);

// Metoda evey()/some() sprawdza czy wszystkie/jeden el. tablicy spełania wwarunek. Odp. boolean


// const ourNumbers = [2, 67, 5, 90, -2];
// console.log(ourNumbers);

// const myNumbers = ourNumbers.every(value => value > 2);//false
// console.log(myNumbers)

// const yourNumbers = ourNumbers.some(value => value > 2);//true
// console.log(yourNumbers)



// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every zwróci true tylko wtedy, jeśli będzie więcej niż 0 sztuk wszystkich owoców
// const allAvailable = fruits.every(fruit => fruit.amount > 0);// false
// console.log(allAvailable)

// // some zwróci true tylko wtedy, jeśli będzie więcej niż 0 sztuk przynajmniej jednego owocu
// const anyAvailable = fruits.some(fruits => fruits.amount > 0);// true
// console.log(anyAvailable)

// //Metoda reduce()
// //Używana gdy chcemy wiele zredukować do jednego, np. pięc liczb w tablicy do jej sumy

const total = [24, 7, 3, 17, 9]
 
const totalAll = total.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(totalAll);

//Metoda sort()
//Modyfikuje orginalną tablicę- tworzymy kopię orginalnej tablicy


const myTotalAll = [...total].sort();

console.log(myTotalAll);//[17, 24, 3, 7, 9];

const youtTotalAll = [...total].sort((a, b) => a - b);

console.log(youtTotalAll);//[3, 7, 9, 17, 24];

const ourTotalAll = [...total].sort((a, b) => b - a);

console.log(ourTotalAll);//[24, 17, 9, 7, 3];
