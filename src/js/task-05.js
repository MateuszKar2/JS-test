

const inputBtn = document.querySelector("#name-input");
const outputBtn = document.querySelector("#name-output");


inputBtn.addEventListener("input", clickInputChange);

function clickInputChange(event) {
        inputBtn.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        outputBtn.textContent = 'Anonymous';
    }
};


 






















