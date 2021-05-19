'use strict';

const textOrigin = document.getElementById('text-count');
const countedText = document.querySelector('.counted-text');
const indicator = document.querySelector('.indicator');
const toggleInclude = document.querySelector('.include-input');

const setCounted = () => {
    let textTotalCount = Array.from(textOrigin.value);
    if (!toggleInclude.checked) {
        textTotalCount = textTotalCount.filter(char => char !== " ");
        countedText.innerText = textTotalCount.length;
    } else {
        countedText.innerText = textTotalCount.length;
    }
}

textOrigin.addEventListener('keyup', () => {
    setCounted();
});

toggleInclude.addEventListener('change', () => {
    toggleInclude.checked ? indicator.textContent = "(spaces included)" :
        indicator.textContent = "(spaces not included)";

    setCounted();
})