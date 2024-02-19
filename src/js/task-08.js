
const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const formData = {};
    for (const element of formLogin.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
        if (formData.email && formData.password) {
            console.log(formData);
        } else {
            alert('all fields should be completed');
        }
}
);