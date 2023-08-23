const inputBtn = document.querySelector("#name-input");
const outputBtn = document.querySelector("#name-output");


inputBtn.addEventListener("input", clickInputChange);

function clickInputChange(event) {
        inputBtn.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        outputBtn.textContent = 'Anonymous';
    }
};

// const textInput = document.querySelector('#name-input');
// const textOutput = document.querySelector('#name-output');

// textInput.addEventListener('input', clickInputChange);

// function clickInputChange(e) {
//   textOutput.textContent = e.currentTarget.value;
//   if (e.currentTarget.value.trim() === '') {
//     textOutput.textContent = 'Anonymous';
//   }
// }