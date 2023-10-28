//CRUD-do interakcji z zasobami backendu używane są najczęsciej 4 operacje:
//tworzenie-- POST
//odczytywanie-- GET
//aktualizowanie-- PUT/PATCH
//usuwanie-- DELETE


//GET
//Metoda HTTP GET służy do pobierania istniejących danych. Metoda fetch() powinna wysłać żądanie GET bez treści do serwera.
//Backend po otrzymaniu żądania przetworzy je w odpowiedzi i zwróci niezbędne zasoby.



// const postId = 15;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));




//POST
//Metoda POST służy do dodawania nowego zasobu. Metoda fetch() powinna wysłać do serwera żądanie POST, 
//w ciele - body którego będzie obiekt z polami author i body, identyfikator zostanie automatycznie utworzony przez bazę danych. 
//Wynikiem takiego żądania będzie obiekt który został dodany do bazy danych.



// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),//Podczas przesyłania złożonych typów danych należy je przekonwertować na ciąg znaków za pomocą metody JSON.stringify()
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));




//PUT/PATCH
//Obie metody PUT i PATCH służą do aktualizacji istniejących danych. Której metody użyć, zostanie opisane w dokumentacji backendu.
// Metoda fetch() musi wysłać do serwera żądanie, w treści którego należy wskazać obiekt z polami do zmiany. 
//Ścieżka wskazuje, którą kolekcję i który element chcemy zaktualizować.
// Backend po otrzymaniu żądania przetworzy je i zwróci w odpowiedzi zaktualizowany zasób.

const postToUpdate = {
    id: 1,
    body: "CRUD is really awesome",
  };
  
  const options = {
    method: "PATCH",
    body: JSON.stringify(postToUpdate),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
    .then(response => response.json())
    .then(post => console.log(post))
    .catch(error => console.log("ERROR" + error));

//Wedle konwencji, metoda PATCH zastępuje tylko wartości przekazane w treści żądania właściwości w istniejącym zasobie - czyli aktualizuje go częściowo.
// Metoda PUT z kolei całkowicie zastępuje zasób lub tworzy go, jeśli jeszcze nie istnieje.





//DELETE
// Metoda DELETE służy do usuwania istniejących danych. Metoda fetch() powinna wysłać do serwera żądanie DELETE bez treści. 
// Ścieżka wskazuje, w której kolekcji i który element chcemy usunąć.
//  Backend po otrzymaniu żądania przetworzy je, usunie zasób z kolekcji i zwróci status wyniku w odpowiedzi.

const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then(() => console.log("Post deleted"))
  .catch(error => console.log("Error:", error));
