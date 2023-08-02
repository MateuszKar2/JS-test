//obiekty

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
}

console.log(book);

//odwołanie się do właściwości (klucza)
//każda kropka wskazuje na zagnieżdzenie

const bookTitle = book.title;



console.log(bookTitle);

const user = {
    name: "Jacques",
    tag: "jgluke",
    location: {
      country: "Jamaica",
      city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
  };

//odwołanie się do właściwości zagnieżdzonej 
const locationCountry = user.location.country;
console.log(locationCountry);

//odwołanie się do tablicy
  const hobbies = user.hobbies;

  console.log(hobbies);
  console.log(hobbies[1]);

  //zmiana wartości klucza(właściwości)

  user.location.country = "Germany";
  console.log(user.location.country)

  //dodawanie właściwości

  user.surname = "Gluke";
  console.log(user.surname);
//obiekty mogą również przechowywac funkcje
//KAŻDA METODA JEST FUNKCJĄ ALE NIE KAŻDA FUNKCJA JEST METODĄ 
// aby uzyskać dostęp do obiektu metoda która w nim się znajduje,
//nie używa nazwy zmiennej ale słowa kluczowego ,,this"- kontekstu swojego wykonania
  const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      console.log(this);
    },
  };
  
  // Kropka jest poprzedzona obiektem bookShelf,
  // więc kiedy metoda jest wywoływana,
  // this będzie przechowywało link do niego.
  bookShelf.getBooks();// {books: ['The Last Kingdom'], getBooks: f getBooks()}

    //Petla for...in
     const bookTwo = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
    };

    console.log(bookTwo);

    for (const key in bookTwo) {
        //dostęp do kluczy
        console.log(key);
        //dostęp do wartości
        console.log(bookTwo[key]);
    };

    //Operator in, który jest używany w pętli for...in, nie rozróżnia własnych i dziedziczonych właściwości obiektu.
    //To zachowanie może nam przeszkadzać, ponieważ raczej chcemy iterować tylko po własnych właściwościach obiektu. 
    //Aby dowiedzieć się, czy dana właściwość obiektu jest “własna”, używana jest metoda hasOwnProperty(key), która zwraca true albo false.

    const animal = {
        legs: 4,
    }

    const dog = Object.create(animal);

    dog.name = "Arnold";
    
    console.log("name" in dog);
    console.log("legs" in dog);
    //Dlatego korzystamy z metody hasOwnProperty(key)
    console.log(dog.hasOwnProperty("name"));
    console.log(dog.hasOwnProperty("legs"));
