const node = "najważniejsza funkcjonalność Node.js- MOŻLIWOŚĆ WYKONYWANIA KODU PO ZA PRZEGLADARKĄ !!!"
console.log(node);

const npm = "instaluje on wymagane pakiety i zapewnia przyjazny dla użytkownika interfejs do pracy z nimi"
console.log(npm);

//NPM składa się z 3 elementów
//strona npmjs.com          -wyszukiwania i dokumentacja pakietów
//interfejs wiersza poleceń         -program uruchamiany w terminalu. Udostepnia zestaw polceń do pracy z rejestrem i pakietami
//rejestr pakietów          -duża publiczna baza danych narzędzi programistycznych


//podstawowe polecenia(jest ich znacznie więcej)
//npm init
//npm install
//npm start/ npm test
//npm update

//Inicjowanie projektu
//npm init => npm init --yes

//MODUŁOWOŚĆ KODU
//ECMAScript Modules(ESM)
//Moduł ES to fragment kodu JS wielokrotnego użytku, który eksportuje określone obiekty, udostępniając je innym modułom.

//np.

//plik ,,gretter.js"

const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

export const hello = () => helloMessage;
export const goodbye = () => goodbyeMessage;


// import { hello, goodbye } from "./greeter";

// console.log(hello()); 
// console.log(goodbye());


//WEBPACK to konstruktor modułów JS. Ustawia kolejność łączenia modułów, łączy, minifikuje, pakuje oraz wiele więcej
