const span = document.querySelector("span");
const textarea = document.querySelector("textarea");
const maxLength = textarea.maxLength;
let currentInput = textarea.value;
let inputLength = currentInput.length;
span.textContent = inputLength + " / " + maxLength;

function handleInput() {
    currentInput = textarea.value;
    inputLength = currentInput.length;
    span.textContent = inputLength + " / " + maxLength;

    if(inputLength >= maxLength) {
        textarea.classList.add("limitArea");
        span.classList.add("limitSpan");
    }
    else {
        textarea.classList.remove("limitArea");
        span.classList.remove("limitSpan");
    }
}