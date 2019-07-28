

const secret = {
    name: '',
    age: '',
    text: '',
}

const nameInput = document.querySelector('.form__input--nameJs');
const ageInput = document.querySelector('.form__input--ageJs');
const txtArea = document.querySelector('.form__input--txtAreaJs')
const saveButton = document.querySelector('.form__input--Js1');
const loadButton = document.querySelector('.form__input--Js2');

saveButton.addEventListener('click', function () {
    localStorage.setItem('nameInput', JSON.stringify(nameInput));
    localStorage.setItem('ageInput', JSON.stringify(ageInput));
    localStorage.setItem('txtArea', JSON.stringify(txtArea));
})
