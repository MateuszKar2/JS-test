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
//             resolve("Success! Value passed to resolve function")
//         } else {
//             reject("Error! Error passed to reject function")
//         }
//     }, 2000)
// });

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

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000)
});

promise
    .then(value => {
    console.log(value);
    return value * 2;
})
    .then(value => {
    console.log(value);
    return value * 3;
})
    .then(value => {
    console.log(value);
    return value * 4;
  })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final task");
    })
