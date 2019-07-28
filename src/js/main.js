

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const txtArea = document.getElementById('secret');
const saveButton = document.querySelector('.form__input--Js2');
const loadButton = document.querySelector('.form__input--Js1');


saveButton.addEventListener('click', function () {
     localStorage.setItem('name', nameInput.value);
     localStorage.setItem('age', ageInput.value);
     localStorage.setItem('secret', txtArea.value);
 })


/* saveButton.addEventListener('click', function () {
     localStorage.setItem('name', JSON.stringify(nameInput.value));
     localStorage.setItem('age', JSON.stringify(ageInput.value));
     localStorage.setItem('secret', JSON.stringify(txtArea.value));
}) */


loadButton.addEventListener('click', function () {
    nameInput.value = localStorage.getItem('name');
    ageInput.value = localStorage.getItem('age');
    txtArea.value = localStorage.getItem('secret');
});
