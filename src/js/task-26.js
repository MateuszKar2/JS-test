//JSON - to nowoczesny format tekstowy służący do przekazywania i przechowywania danych tekstowych
//W tym formacie dane będą przesyłane i wysyłane na serwer, przechowywane w pamięci lokalnej itp,
//JSON nie jest obiektem ale jego reprezentacją w postaci stringa
//Składnia jest podobna do obiektu ALE: klucze są stringami w podwójnym cudzysłowiu, wartości typu string również muszą być w cudzysłowiu
//Wartości właściwości mogą być nastepującego typu: string, number, object, array, boolean, null


// user.json
// {
//     "name": "Josh",
//     "weight": 175,
//     "age": 30,
//     "eyecolor": "brown",
//     "isHappy": true,
//     "cars": ["Chevy", "Honda"],
//     "favoriteBook": {
//       "title": "The Last Kingdom",
//       "author": "Bernard Cornwell",
//       "rating": 8.38
//     }
//   }

//KONWERSJA js => json i json => js jest prosta

// js => json - JSON.stringify()

const dog = {
    name: "Mango",
    age: 3,
    isHappy: "true",
    bark() {
        console.log("Woof!");//metody zostaną zignorowane podczas konwersji(WYJĄTEK!!!)
    },
};

const dogJSON = JSON.stringify(dog)
console.log(dogJSON)


// json => js - JSON.parse()

const json = '{"name":"Mango","age":3,"isHappy":true}';

const cat = JSON.parse(json);

console.log(cat);


//jesli nieprawidłowy JSON zostanie przekazany do metod klasy JSON, aplikacja sie zawiesi
//Dlatego stosuje się konstrukcje try...catch   która pozwala wyłapać takie sytuacje

// const data = JSON.parse("Well, this is awkward"); BŁĄD- aplikacja nie działa

try {
    const data = JSON.parse("Well, this is awkward");
} catch (error) {
     console.log(error.name); //rodazj błędu w przypadku parsowania jest to - SyntaxError
     console.log(error.message); //wiadomość o szczegółach błedu
     console.log(error.stack); // stos wywołań funkcji w momencie wystąpienia błędu


}

//Web Storage API: MAgazyn lokalny (localStorage) i magazyn sesji (sessionStorage). 
//W magazynie internetowym można zapisywać tylko strings, ale nie stanowi to problemu gdy używam JSON. Są unikalne dla całej aplikacji
// localStorage-Dane w magazynie lokalnym nie są usuwane nawet po zamknięciu przeglądarki lub wyłączeniu komputera. Ale można jes usunąć.
// sessionStorage- Gdy tylko użytkownik zamknie kartę lub przeglądarkę, dane są usuwane.
//Z tego powodu częsciej korzysta się z localStorage
//W magazynie lokalnym nie trzymamy danych wrażliwych
//Umożliwia przechowywanie niewygasających danych w formacie par klucz:wartość
// na komputerze użytkownika i odczytywanie ich podczas ponownego odwiedzania strony

//  setItem(key, value) 
// tworzy nowy lub aktualizuje istniejący rekord w magazynie.
//  moge dodac nowy wpis jako parę klucz:wartość

localStorage.setItem("ui-theme", "light");

//w  przypadku tablicy lub obiektu muszę przekonwertowac go na string za pomocą metody JSON.stringify()--PRZECHOWYWANIE--

const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
}

localStorage.setItem("settings", JSON.stringify(settings));

//  getItem(key) // zwraca wartość z kluczem key z magazynu. --ODCZYTYWANIE--

localStorage.setItem("ui-theme", "dark");

const theme = localStorage.getItem("ui-theme");
console.log(theme); //dark

//  removeItem(key) // usuwa rekord z kluczem key z magazynu.

localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

//  clear() // całkowicie czyści wszystkie rekordy w magazynie.

localStorage.clear();

//  length // przechowuje liczbę rekordów w magazynie.

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});