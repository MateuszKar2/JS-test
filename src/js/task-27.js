//Kod synchroniczny

// console.log("First log");
// console.log("Second log");
// console.log("Third log");


//Kod asynchroniczny
// console.log("jeden");
 
// setTimeout(() => { //umożliwia zaplanowanie uruchomienia funkcji po określonym czasie
//     console.log("dwa")
// }, 1000);

// console.log("trzy")





// const button = document.querySelector("button");

// const onClick = () => {
//     const timeId = setTimeout(() => {
//         console.log("button is open")
//     }, 1000);

//     console.log(timeId);
// }

// button.addEventListener("click", onClick);

//anulowanie wywołanie funkcji zanim upłynie zdefiniowany czas

// const greet = () => {
//     console.log("Hello")
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

//Metoda setInterval() to prosty sposób aby powtarzać funkcje w kółko
//Moge zatrzymać funkcje wywołująć => clearInterval();

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timeId = null;

// startBtn.addEventListener("click", () => {
//     timeId = setInterval(() => {
//         console.log(`I love async JS ${Math.random()}`);
//     }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//     clearInterval(timeId);
//     console.log(`Interval with id ${timeId} has stopped`);
// });





//Data

// const date = new Date();

// console.log(date);
// console.log(date.toString());

//Czas uniksowa - data poczatkowa czasu dla programisty

// console.log(new Date(0));
// console.log(new Date(942435235640));

//Ustawianie daty(godziny, dnia, miesiąca i itp...);

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// const preciseTeamMeetingDate = new Date("March 16, 2020 14:25:00");
// console.log(preciseTeamMeetingDate);

//getery służą do odczytywania całej daty lub jej częsci
// const date = new Date();
// console.log("Date: ", date);

// // Zwraca dzień miesiąca od 1 do 31
// console.log("getDate(): ", date.getDate());
// // Zwraca dzień tygodnia od 0 do 6
// console.log("getDay(): ", date.getDay());
// // Zwraca miesiąc od 0 do 11
// console.log("getMonth(): ", date.getMonth());
// // Zwraca rok z 4 cyfr
// console.log("getFullYear(): ", date.getFullYear());
// // Zwraca godzinę
// console.log("getHours(): ", date.getHours());
// // Zwraca minuty
// console.log("getMinutes(): ", date.getMinutes());
// // Zwraca sekundy
// console.log("getSeconds(): ", date.getSeconds());
// // Zwraca milisekundy
// console.log("getMilliseconds(): ", date.getMilliseconds());
// Zwraca dzień miesiąca od 1 do 31
// console.log("getUTCDate(): ", date.getUTCDate());//format UTC
//itp.

//setery służą do nadpisywania
// const date = new Date("March 16, 2030 14:25:00");
// console.log(date);
// date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"
// date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"
// console.log(date);

//Metoda toString() zwraca całą datę, a toDateString() i toTimeString() - odpowiednio tylko datę i godzinę.
// const date = new Date("March 16, 2030 14:25:00");

// date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
// date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"
// date.toLocaleTimeString();
// "2:25:00 PM"
// date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"
// date.toDateString();
// "Sat Mar 16 2030"
// date.toISOString();
// "2030-03-16T12:25:00.000Z"
// date.toLocaleString();
// "3/16/2030, 2:25:00 PM"
// date.getTime();
// 1899894300000
