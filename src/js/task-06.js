// const textInput = document.querySelector('#validation-input');


// textInput.addEventListener('blur', e => {
//     if (
//         e.currentTarget.value.lemgth === Number(e.currentTarget.dataset.length)
//     ) {
//         textInput.classList.add('valid');
//         textInput.classList.remove('invalid');
//     } else {
//         textInput.classList.add('invalid');
//         textInput.classList.remove('valid');
//     }
// });


const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
    ) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
});
 