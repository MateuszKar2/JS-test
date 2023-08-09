function myFirstFunction(name) {
    return `Pozdrawiam ${name}`;
}


console.log(myFirstFunction("Seba"));
//zawiera link do funkcji a nie jej wynik wywołania, oznacza to 
//że funkcję można przypisać do zmiennej lub przekazać jako argument
//do innej funkcji
console.log(myFirstFunction)

//FUNKCJA WYWOŁANIA ZWROTNEGO (callback)
function registerGuest(name, callback) {
    console.log(`Rejestracja gościa ${name}`);
    callback(name);
}
//To funkcja która jest przekzywana do innej funkcji jako argument
//i następnie jest w niej wywoływana
registerGuest("Mango", function greet(name) {
    console.log(`Pozdrawiam ${name}`);
});
//FUNKCJA WYŻSZEGO RZĘDU to funkcja która przyimuje inne funkcje 
//jako argument

// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     }
// }

// repeatLog(25);


//Petla forEach...porównanie z klasycznym for

const numbers = [21, 43, 2, 9, 17];

//Klasyczny for
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Indeks ${i}, wartość ${numbers[i]}`)
}
//Iterujący forEach
numbers.forEach(function (number, index) {
    console.log(`Indeks ${index}, wartośc ${number}`)
});
//Minusem pętli forEach jest trudność w przerwaniu wykonania metody
//Słowa kluczowe ,,break" i ,,continue" nie działają

function classicAdd(a, b, c) {
    return a + b + c;
}

// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// }

//,,Niejawny zwrot"
const arrowAdd = (a, b, c) => a + b + c;

//funkcje strzałkowe
numbers.forEach((number, index) => {
    console.log(`Indeks ${index}, wartośc ${number}`)
});

//Programowanie imperatywne-opisuje jak to zrobić
//Programowanie deklaratywne- opisuje jaki jest rezultat
