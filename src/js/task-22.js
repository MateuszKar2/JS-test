//detektor zdarzeń
const iAmYes = document.querySelector(".yes");
iAmYes.addEventListener("click", () => {
    console.log("Button was clicked");
});
const iAmNo = document.querySelector(".no");
iAmNo.addEventListener("click", () => {
    console.log("Button was not clicked");
});

//najlepiej użyc oddzilnej funkcji

const handleClick = () => {
    console.log("Button was Clickes again")
};

//detektor może mieć dowolną liczbę funkcji

const handleClickTwo = () => {
    console.log("Button was Clickes now")
};


iAmYes.addEventListener("click", handleClick);
iAmYes.addEventListener("click", handleClickTwo);

//usuwanie detektora zdarzeń