//Dwa rodaje programowania
//PROGRAMOWANIE PROCEDURALNE- 
//kod jest zestawem niepowiązanych ze sobą funkcji i zmiennych do przechowywania i przetrzymywania informacji

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
    return baseSalary + overtime * rate;
}

console.log(getWage(baseSalary, overtime, rate)); // 30200

//PROGRAMOWANIE OBIEKTOWE - OOP(eng.) - 
//metodologia, oparta na reprezentacji programu jako zbioru obiektów, z których kazdy zawiera dane i metody do interakcji z nimi

const employee = {
     baseSalary: 30000,
     overtime: 10,
     rate: 20,
    getWage() {
        return this.baseSalary + this.overtime * this.rate;
    },
};

console.log(employee.getWage());

//prostszy interfejs, mnijesza złożoność, ułatwiana operatywość
//OOP => KLASA => to sposób opisania encji (jednostki), opisujący stan i zachowania zależne od tego stanu [Samochód: koła, silnik, podwozie]
//OOP => OBIEKT =>  określone właściwości i metody danego obiektu [kolor, kształt]
//OOP => INTERFEJS => zestaw właściwości i metod klasy, dostępne podczas pracy z instancją [zwiększanie prędkości, hamowanie]

//Prototype 
//OOP w JS jest zbudowane na dziedziczeniu prototypowym. Obiekty można łączyc w łancuchu dziedziczenia, żeby właściwość nie znaleziona
//w jednym obiekcie, była automatycznie wyszukiwana w innym. To właściwością jest właśnie ,,Prototype"

//Metoda Object.create(object) tworzy i zwraca nowy obiekt, łącząc go z obiektem

const animal = {
    legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";


console.log(dog);
console.log(animal.isPrototypeOf(dog));

//prototyp jest zapasowym magazynem właściwośći i metod obiektów. Obiekt który działa jako prototyp może mieć swój własny prototyp i tak dalej...
//w specyfikacji ,,proto" ważne są podwójne nawiasy, oznaczające że jest to właściwość wewnętrzna/usługowa [[ Prototype ]]

//Metoda hasOwnProperty()

// const animal = { 
//     eats: true 
// };
// const dog = Object.create(animal);
// dog.drinks = true;

// for (const key in dog) {
//     console.log(key);
// }

//Metoda hasOwnProperty()- zwróci true jeżeli właściwość należy do tego samego obiektu jeżeli nie false

// const animal = { 
//     eats: true 
// };
// const dog = Object.create(animal);
// dog.drinks = true;

// // 1) 
//     for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) continue;
//     console.log(key);
// }

//Metoda Object.keys(obj) zwróci tablicę wyłącznie własnych kluczy obiektu obj, 
//a więc w praktyce jest używana zamiast for...in bo zwyczajnie jest wygodniejsza i czystsza.

// 2)
    const dogKeys = Object.keys(dog);
    console.log(dogKeys);


    //KLASY

    //Podczas inicjalizacji instancji, klasa wykona metodę constructor. Jeśli nie jest ona zadeklarowana,
    // tworzony jest domyślny konstruktor — pusta funkcja, która nie wykonuje żadnych instrukcji.

    class User {

            // Obowiązkowa deklaracja właściwości prywatnych(poprzez symbol # nie dostepny do modufikacji z zewnątrz)
            #email;


        // Składnia deklarowania metody klasy
          constructor({ name, email }) {
        // Inicjalizacja właściwości instancji
            this.name = name;
            this.email = email;
          }
        
        
        // I. Metoda getEmail
        getEmail() {
            return this.#email;
        }

        // II. Metoda changeEmail
        changeEmail(newEmail) {
            this.#email = newEmail;
        }
    }

    const mango = new User({
        name: "Mango", 
        email: "mango@mail.com"
    });
    console.log(mango);// User { name: "Mango", email: "mango@mail.com" }

// GETTERY i SETTERY (get/set)
// Getter jest wykonywany podczas próby uzyskania wartości właściwości, a setter jest wykonywany podczas próby jej zmiany

    // I. Getter email
    //     get email() {
    //     return this.#email;
    // }

    // II. Setter email
    //     set email(newEmail) {
    //     this.#email = newEmail;
    // }

//WŁAŚCIWOŚCI STATYCZNE oprócz właściwości publicznych i prywatnych
//możemy deklarować właściwości statyczne. Są 

    // Deklaracja i inicjalizacja właściwości statycznej
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//można deklarować również metody statyczne, mogą być zarówno publiczne jak prywatne

//DZIEDZICZENIE KLAS
//Słowo kluczowe ,,extends" pozwala na implementacje dziedziczenia klas, gdy jedna klasa dzidziczy właściwości i metody innych klas

// class Child extends Parent {

// }

//*klasa potomna nie dziedziczy prywatnych właściwości i metod po klasie nadrzędnej.
  

class Books {

    static Author = {  //właściwości statyczne
        NAME: "Rowling"
    }
    static everyBooks = [];//metody statyczne
    static isgoodbook(title) {//metody statyczne(zarówno publiczne jak prywatne)
        return Books.everyBooks.includes(title);
    }

    author; 
    #page; //właściwości prywatna
    constructor({ title, page, author }) {
        this.title = title;//właściwości publiczne
        this.#page = page;
        this.author = author;
        Books.everyBooks.push(title);
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(newAuthor) {
        this.author = author;
    }

    get page() {
        return this.#page;
    }

    set page(newPage) {
        this.#page = newPage;
    }
}

const reading = new Books("Harry Potter");
console.log(reading);//instancja klasy- ponieważ zawiera dane i zachowanie opisane przez klasę

const willread = new Books({//Obiekt parametru
    title: "Harry Potter",
    page: "438",
    author: Books.Author.NAME,
});
console.log(willread);
console.log(willread.page);



