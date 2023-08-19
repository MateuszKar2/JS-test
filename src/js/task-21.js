//DOM (Document Object Model)- Łączy naszą stronę HTML z naszym programem

//tworzrzenie
document.createElement(tagName);

//dodawanie

//usuwanie
elem.remove();

//Aby wyświetlić dokument HTML, przeglądarka najpierw konwertuje go do formatu, który rozumie — DOM.
//Dwa rodzaję wezłów: węzły elementów i węzły tekstowe

element.querySelector(selector);
//zwraca pierwszy element, jeżeli nie znajdzie zwraca null

element.querySelectorAll(selector);
//zwraca pseudotablicę wszystkich elementów, jeżeli nic nie znajdzie zwróci pusta tablicę

//WŁAŚCIWOŚCI I ATRYBUTY
//value-zawiera aktualna wartość ele. formularza.(string)
//checked - przechowuje stan pola wyboru lub przycisku radiowego. (boolean)
//name - przechowuje wartość określoną w atrybucie HTML name. (string)
//src - ścieżka do obrazu znacznika <img>. (string)
//elem.textContent zwraca zawartość tekstową wewnątrz elementu.

//właściwość ,,classList" przechowuje obiekt z metodami pracy z klasami elementu
//włąściwość ,,style" służy do odczytywania i zmiany stylów wbudowanych (inline)
//atrybuty
//atrybuty data

//właściwość innerHTML: czytanie, zmiana, dodanie

//metoda ,,insertAdjacentHTML", przyjmuje 4 pozycje
elem.insertAdjacentHTML(position, string);

//ŁADOWANIE STRINGÓW
//Atrybut defer
//<script defer src="path-to-script.js"></script>
//Atrybut async
//<script async src="path-to-script.js"></script>