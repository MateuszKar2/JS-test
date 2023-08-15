//This np.
//Maciej biegnie szybko, ponieważ Maciej próbuje złapać pociąg.
//Maciej biegnie szybko, ponieważ on(this) próbuje złapać pociąg.

const bookShelf = {
    authors: ["Bernard Cornwell", "Robert Sheckley"],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  
  console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley"]
  bookShelf.addAuthor("Tanith Lee");
  console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

  
  //I.W zasięgu globalnym ,,this" to undefined
    //Wartość ,,kontekstu" będzie określony nie w momencie utworzenia ale w momencie wywołania

  function foo() {
    console.log(this);
  }
  
  foo();// window bez "use strict" i undefined z "use strict"

//II.W metodzie obiektu

  const mateusz = {
    name: "Mateusz",
    country: 'Poland',
    age: "28",
    showName() {
      console.log(this.country);

    },
  }

  mateusz.showName();

  //III.W funkcjach callback
  
  // const karpinski = {
  //   name: "Mateusz",
  //   country: 'Poland',
  //   age: "28",
  //   showName() {
  //     return `${this.name} ${this.country}`;
  //   },
  // }

  // function getMessage(callback) {
  //   console.log(`Jestem ${callback()}`);
  // }

  // getMessage(karpinski.showName);
  //Wystąpi błąd podczas wywoływania funkcji
//rozwiązanie przy metodzie bind() 


//IV.W funkcjach strzałkowych
//Funkcje strzałkowe nie mają własnego this


//--------------
//METODY FUNKCYJNE
//Zdarzają się sytuacje, w których funkcję trzeba wywołać w kontekście obiektu, a funkcja nie jest jego metodą.
// Aby to zrobić, funkcje posiadają metodycall, apply i bind.
  

//Metoda call()

//Wywoła funkcję foo.call(obj, arg1, arg2, ...)

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.call(mango, "Witaj");// Witaj, Mango.
greetGuest.call(poly, "Witaj");// Witaj, Poly.

//Metoda apply()

//Metoda apply jest analogiczna do metody call z tą różnicą, 
//że składnia przekazywania argumentów wymaga tablicy z argumentami, 
//nawet jeśli istnieje tylko jeden argument.

//foo.apply(obj, [arg1, arg2, ...])

function badGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const bety = {
  username: "Bety",
};
const tom = {
  username: "Tom",
};

badGuest.apply(bety, ["Witaj"]);// Witaj, Bety.
badGuest.apply(tom, ["Witaj"]);// Witaj, Tom.

//Metoda bind()
//Metody call i apply wywołują funkcję "na miejscu", czyli natychmiast.
//Ale w przypadku funkcji callback, gdy konieczne jest nie natychmiastowe wywołanie funkcji, 
//ale przekazanie do niej linku z kontekstem do powiązania, stosowana jest metoda bind.

//foo.bind(obj, arg1, arg2, ...)

function greet(clientName) {
  return `${clientName}, witaj w «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Mango");// "Mango, witaj w «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Poly");// "Poly, witaj w «Gmail»."

//Metoda bind służy do wiązania kontekstu podczas przekazywania metod obiektów jako funkcji wywołania zwrotnego. 
//Przekażmy przez wywołanie zwrotne nie oryginalną metodę, ale jej kopię z przypisanym kontekstem do obiektu