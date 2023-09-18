const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
    console.log("event.target", event.target)
    console.log("event.currentTarget", event.currentTarget)
    console.log("Parent")
})

child.addEventListener("click", (event) => {
    event.stopPropagation(); // zapobiega dalszemu postepowi zdarzenia na poziom wyżej
    console.log("Child")
})

descendant.addEventListener("click", () => {
    console.log("descendant")
})

//Najgłębszy el. który wywołuje zdarzenie, nazywa się el. docelowym luz źródłowym i dostępny jest jako
//event.target - to odwołanie do el. na którym wystapiło zdarzenie
//event.currentTarget- to odwołanie do bierzacego el. do którego dotarło bąbelkowanie

// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const button4 = document.querySelector("#button4");
// const button5 = document.querySelector("#button5");

// button1.addEventListener("click", () => {
//     console.log("1")
// })

// button2.addEventListener("click", () => {
//     console.log("2")
// })

// button3.addEventListener("click", () => {
//     console.log("3")
// })

// button4.addEventListener("click", () => {
//     console.log("4")
// })

// button5.addEventListener("click", () => {
//     console.log("5")
// })

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", () => {
    console.log("boom")
    console.log("event.target",event.target)
    console.log("event.currentTarget",event.currentTarget)
})
