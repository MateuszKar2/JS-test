//Promise - obiekt reprezentujący aktualny stan operacji asynchronicznej
//Pozwala traktować wyniki operacji asynchronicznej tak, jakby były synchroniczne
//Zamiast końcowego wyniku, zwracana jest obietnica otrzymania wyniku w przyszłości


//Obietnica ma trzy stany
//,,oczekujący" - stan poczatkowy podczas tworzenia i wykonywania obietnicy
// ,,spełniony" - operacja zakończona sukcesem
// ,,odrzucony" - operacja została odrzucona (z błędem)

//resolve(value)- funkcja, którą powinniśmy wywołać po udanej operacji
//reject(error)-funkcja do wywołania w przypadku błędu

// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function")
//         }
//     }, 1000);
// });

// console.log(isSuccess);

// console.log("Before promise.then()");

// //Metoda then()- tylko pomyslne wykonanie obietnicy

// promise.then(
//     value => {
//         console.log("onResolve call inside promise.them()")
//         console.log(value);
//     },
//     error => {
//         console.log("onReject call inside promise.then()")
//         console.log(error);
//     }
// );

// console.log("After promise.then()");

// //Metoda catch()- obsługuje błąd jej wykonania

// promise
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// //Metoda finally()

//     .finally(() => {
//         console.log("Promise settled")
//     });

//Przykład

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 2000)
// });

// promise
//     .then(value => {
//     console.log(value);
//     return value * 2;
// })
//     .then(value => {
//     console.log(value);
//     return value * 3;
// })
//     .then(value => {
//     console.log(value);
//     return value * 4;
//   })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Final task");
//     })

//----------------------------------------------------//
//Złe rozwiazanie

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//         const isSuccess = false;

//         if (isSuccess) {
//             onSuccess("success value");
//         } else {
//             onError("error");
//         }
//     }, 2000);
// };

// const onFetchSuccess = user => {
//     console.log(user);
// };

// const onFetchError = error => {
//     console.log(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);
// ----------------------------------------------------//
//Dobre rozwiazanie

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//       console.log(`Fetching data for ${username}`);
  
//       setTimeout(() => {
//         // Change value of isSuccess variable to simulate request status
//         const isSuccess = true;
  
//         if (isSuccess) {
//           resolve("success value");
//         } else {
//           reject("error");
//         }
//       }, 2000);
//     });
//   };
  
//   fetchUserFromServer("Mango")
//     .then(user => console.log(user))
//     .catch(error => console.error(error));

// Większość nowoczesnych bibliotek opiera się na obietnicach. Podczas wywoływania metody
//  dla operacji asynchronicznej jej wynik jest dostępny jako obietnica, 
//  do której można dołączyć procedury obsługi w metodach then() i catch().







// Są zadania, w których pracuje z całą kolekcją obietnic. Czasem musze poczekać, aż wszystkie zostaną wykonane, 
// a dopiero potem przetworzyć ich wyniki, a czasem wystarczy poczekać na wykonanie którejkolwiek z nich, 
// ignorując resztę itp. W tych przypadkach klasa Promise ma statyczne metody do pracy z jedną obietnicą lub grupą obietnic.



//Promise.all()
//Przyjmuje tablicę obietnic, czeka na ich spełnienie i zwraca wspólną obietnicę
//Jeśli wszystkie obietnice z tablicy się powiodą => fulfilled, a jej wartością będzie tablica wyników realizacji każdej przekazanej obietnicy.
// Jeżeli chociaż jedna z obietnic zostanie odrzucona, => rejected, a jej wartością będzie napotkany błąd wyrzucony przez odrzuconą obietnicę.

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
// .then(value => console.log(value)) // po 3 sekundach
// .catch(error => console.log(error));



//Promise.race()
//Zwraca spełnioną lub odrzuconą obietnicę, w zależności od wyniku,
// z jakim zakończy wynikiem się „najszybsza” z przesyłanych obietnic, z wartością lub powodem jej odrzucenia.

// Promise.race([promiseA, promiseB])
// .then(value => console.log(value)) // po 1 sekundach
// .catch(error => console.log(error));
//Druga metoda zostanie zignorowana



//Promise.resolve()/ Promise.reject()
// Statyczne metody do tworzenia natychmiastowyo udanych lub odrzuconych obietnic. Działają w taki sam sposób, 
// jak new Promise() z wyjątkiem tego, że można określić ich opóźnienie, ale mają krótszą składnię

        //resolve
//   new Promise(resolve => resolve("success value")).then(value =>
//     console.log(value)
//   );

//   Promise.resolve("success value").then(value => console.log(value));

       //reject
//   new Promise((resolve, reject) => reject("error")).catch(error =>
//     console.error(error)
//   );
  
//   Promise.reject("error").catch(error => console.error(error));


//przykład
  const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
        return Promise.reject("Guest name must not be empty");
    }
        return Promise.resolve(`Welcome ${guestName}`);
  };

  makeGreeting("Mango")
    .then(greeting => console.log(greeting))
    .catch(error => console.error(error));

  
