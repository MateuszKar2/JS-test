



const decrementBtn = document.querySelector('[data-action="decrement');
const incrementBtn = document.querySelector('[data-action="increment');
const value = document.querySelector('#value');

let counterValue = 0;


decrementBtn.addEventListener("click", () => {
    value.textContent = counterValue;
    counterValue -= 1;

});


incrementBtn.addEventListener("click", () => {
        value.textContent = counterValue;
        counterValue += 1;

});








































