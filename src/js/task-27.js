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

const greet = () => {
    console.log("Hello")
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);



// //Metoda setInterval() to prosty sposób aby powtarzać funkcje w kółko
// //Moge zatrzymać funkcje wywołująć => clearInterval();

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