const elements = {
    fontSizeContr: document.querySelector("#font-size-control"),
    text: document.querySelector('#text'),
}

elements.fontSizeContr.addEventListener('input', handlerChange);

function handlerChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
};
