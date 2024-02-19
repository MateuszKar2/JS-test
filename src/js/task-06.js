
const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', e => {
if(e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    textInput.classList.replace("invalid", "valid")
} else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
}
});


 