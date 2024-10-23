
//Praca z backendem może być utrudniona, 
//ponieważ po jednej operacji asynchronicznej trzeba wysłać kolejne żądanie do serwera, 
//Po wysłaniu zadania do "my-api.com/me", w odpowiedzi otrzymamy unikalny TOKEN dostępu do chronionych zasobów

// const fetchFriends = () => {
//   return fetch("my-api.com/me").then(token => {
//      console.log(token);
//   });
// };

//Następnie musisz poprosić o profil użytkownika z "my-api.com/profile", ale PROFIL NIE JEST KOMPLETNY !!!!!!!! zawiera tylko krytyczne informacje


// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//   };
  
//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));


const oldMessage =  "Nie jest to najbardziej czytelny kod. Dlatego korzystamy ze składni funkcji asynchronicznej";
// console.log(oldMesage);
//Działają przy tym doskonale w połączeniu z metodami then() i catch(), 
//ponieważ gwarantują zwrócenie obietnicy.

// const fetchFriends = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`)
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`)
//     return friends;
// };

//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));

// Funkcje asynchroniczne (async/await) to wygodny sposób na pisanie kodu asynchronicznego,
// który wygląda na pierwszy rzut oka jak synchroniczny
// Składnia async/await opiera się “pod spodem” na obietnicach, więc nie blokuje głównego wątku programu.

//Aby zadeklarować asynchroniczną funkcję strzałkową, dodaj słowo kluczowe async przed listą parametrów. 
//Wewnątrz możesz wtedy użyć operatora await i umieścić coś po jego prawej stronie, co zwróci obietnicę.

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// fetchUsers().then(users => console.log(users));


//Zasady async/await
// Operator await może być użyty tylko w treści funkcji asynchronicznej (async)
// Operator await zawiesza funkcję do czasu spełnienia obietnicy (fulfilled lub rejected).
// Jeśli obietnica została spełniona (fulfilled), operator await zwróci jej wartość.
// Jeśli obietnica została odrzucona (rejected), operator await wyrzuci błąd.
// Funkcja asynchroniczna zawsze zwraca obietnicę, więc każda zwracana wartość będzie jej wartością.
// Jeśli nie określisz zwracanej wartości, zostanie zwrócona obietnica o wartości undefined.





// Obsługa błedów
// Jeśli wynik funkcji asynchronicznej (obietnica) nie jest używany w kodzie zewnętrznym, błędy są obsługiwane w ciele funkcji za pomocą konstrukcji try...catch
// Wartość parametru error w bloku catch to błąd, który wygeneruje await, jeśli obietnica zostanie odrzucona

// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// fetchUsers();





// Żądania równoległe

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);
  
//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();
  
//     console.log(firstUser, secondUser, thirdUser);
//   };
  
//   fetchUsers();
  
//   Na karcie Network wyraźnie widać, że uruchomienie każdego kolejnego żądania czeka na zakończenie poprzedniego. 
//   znacza to, że są one wykonywane sekwencyjnie, co zajmuje więcej czasu, który jest równy sumie trwania wszystkich żądań

// W naszym przypadku są one całkowicie niezależne, więc trzeba lepiej uruchamiać je równolegle. W tym celu tworzona jest tablica obietnic, 
// która wykorzystywana jest w metodzie Promise.all() aby oczekiwać na ich wykonanie. 

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];

//     const arrayOfPromises = userIds.map(async userId => {
//         const response = await fetch(`${baseUrl}/users/${userId}`);
//         return response.json();
//       });

//       const users = await Promise.all(arrayOfPromises);
//       console.log(users);
//     };
    
//     fetchUsers();

//Przy takim podejściu żądania są uruchamiane równolegle, co oszczędza czas oczekiwania na ich wykonanie, 
//który jest równy czasowi trwania „najwolniejszego” z nich. Ta technika jest odpowiednia tylko wtedy, gdy żądania są od siebie niezależne..





