
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", (e) => {
    output.textContent = e.currentTarget.value;
    if(e.currentTarget.value === "") {
        output.textContent = "Anonymous";
    }
});



 






















