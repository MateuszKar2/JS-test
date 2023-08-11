//Funkcje z efektami ubocznymi 
//Mnoży każdy el. tablicy array przez liczbę value
//Modyfikuje (mutuje) orginalną tablicę przez referencje

const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value
    }
};

//Czysta funkcja
//Przy tych samych argumentach zwraca ten sam wynik
//Nie ma skutków ubocznych, czyli nie zmienia wartości argumentów

const pureMultiply = (array, value) => {
    const newArray = [];

    array.forEach(e => newArray.push(e * value));

    return newArray
};

const numbers = [1,2,3,4,5];
const doubledNumbers = pureMultiply(numbers, 2);

console.log(numbers);

console.log(doubledNumbers);

//Metoda .map() 
//Przekształcenie

const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

console.log(planets);

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);

const planetsWord = planets.map(planet => planet.split(""));
console.log(planetsWord);


const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  const scoreStudents = students.map(student => student.score);
  console.log(scoreStudents);

  //Metoda .flatMap()
  //Spłaszczenie

  const people = [
    { name: "Mango", courses: ["matematyka", "fizyka"] },
    { name: "Poly", courses: ["informatyka", "matematyka"] },
    { name: "Kiwi", courses: ["fizyka", "biologia"] },
  ];

const peopleCourses = people.map(people => people.courses);
console.log(peopleCourses);
// [['matematyka', 'fizyka'], ['informatyka', 'matematyka'], ['fizyka', 'biologia']]

const peopleCoursesFlat = people.flatMap(people => people.courses);
console.log(peopleCoursesFlat);
// ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];

//Metoda .filter()
//Warunek sprawdza

const values = [ 23, 89, -4, 24, 1, -90, -45];

const positiveValue = values.filter(value => value >= 0);
console.log(positiveValue);

const otherValue = values.filter(value => value < 0 && value > -30);
console.log(otherValue);

const peopleCoursesUniques = peopleCoursesFlat.filter((course, index, array) => array.indexOf(course) === index);
console.log(peopleCoursesUniques);

//Metoda .find()
//Znajduje element

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];


