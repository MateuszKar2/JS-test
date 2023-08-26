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

// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//     console.log("key: ", event.key);//zwraca znak wygenerowany przez naciśnięcie klawisza
//     console.log("code: ", event.code);//zwraca kod fizycznego klawisza na klawiaturze i nie zmienia się w zależności od ustawienia klawiatury użytkownika.
//   });
  
// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });

 //WŁAŚĆIWOŚCI KEY I CODE
 //Przykład
// const clearLogBtn = document.querySelector(".clear");
// const logList = document.querySelector(".log");

// let keypressCounter = 1;

// console.log(clearLogBtn)

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 5;
// }

//Zdarzenie SUBMIT
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  form.reset();
}

//Zdarzenie CHANGE
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

//Zdarzenie INPUT

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

//Zdarzenie FOCUS i BLUR

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});