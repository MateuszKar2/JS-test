//detektor zdarzeń
const positive = document.querySelector(".yes");
positive.addEventListener("click", () => {
    console.log("Lion");
});
const negative = document.querySelector(".no");
negative.addEventListener("click", () => {
    console.log("Horse");
});

//najlepiej użyc oddzilnej funkcji

const removeClick = () => {
    console.log("Dog")
};

//detektor może mieć dowolną liczbę funkcji

const handleClick = () => {
    console.log("Tiger")
};


positive.addEventListener("click", removeClick);
positive.addEventListener("click", handleClick);

//usuwanie detektora zdarzeń

positive.removeEventListener("click", removeClick);

//Każde zdarzenie to obiekt
//Wszystkie zdarzenia pochodzą od klasy bazowej Event.
// Możemy go nazwać jak chcemy, ale według konwencji jest deklarowany jako e, evt lub event.

const handleClickTwo = (event) => {
    // console.log(event);
    console.log(event.type);//click
    console.log(event.currentTarget);//el. na którym jest wykonywana procedura obsługi zdarzenia
    event.preventDefault();//aby skasować DOMYŚLNE działanie przeglądarki
    // console.log(event.preventDefault);
}
negative.addEventListener("click", handleClickTwo);

//ZDARZENIA ZWIĄZANE Z KLAWIATURĄ

// Po naciśnięciu klawisza najpierw wydarza się keydown, a po puszczeniu - keyup. 
//W praktyce, na ogół obsługiwane jest tylko zdarzenie keydown

document.addEventListener("keydown", event => {
    console.log("Keydown: ", event);
    console.log("key: ", event.key);//zwraca znak wygenerowany przez naciśnięcie klawisza
    console.log("code: ", event.code);//zwraca kod fizycznego klawisza na klawiaturze i nie zmienia się w zależności od ustawienia klawiatury użytkownika.
  });
  
document.addEventListener("keyup", event => {
    console.log("Keyup: ", event);
  });