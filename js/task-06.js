const input = document.querySelector('#validation-input');

input.addEventListener('blur', checkInput);

function checkInput(event) {
    const inputBlur = event.currentTarget;
    if (inputBlur.value.trim().length === Number(inputBlur.dataset.length)) {
        inputBlur.classList.remove('invalid');
        inputBlur.classList.add('valid');
    } else {
        inputBlur.classList.remove('valid');
        inputBlur.classList.add('invalid');
    }
}