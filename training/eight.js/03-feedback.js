
//instaluje bibliotekę 'lodash.throttle' 
//deklaruje mienną "LOCALSTORAGE_KEY" gdzie będe zapisywał obiekt z polami email i mesage
//deklaruje zmienną "form" do której pobieram za pomocą klasy <form> z HTML
//dodaje dektor zdarzeń <addEventListner> na input i submit
//używam techniki <throttle> która kontroluje ile razy funkcja może być wywołana w określonym czasie
//przypisuje zmiennej let wartość JSON.sparse- czyli konwertuje na wiersz
//do magazyna lokalnego(localStorage) użyłem metody .getItem która zwraca wartość (klucza)
//wykorzystałem operator logiczny(or) tj. ||, jeżeli jeden operand jest true zwraca true

import throttle from 'lodash.throttle';


const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault()
    console.log({ email: email.value, message: message.value});

    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields');
    }

    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.preventDefault.reset();
    dataForm = {};
}