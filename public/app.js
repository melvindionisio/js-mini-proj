'use strict';

const textOrigin = document.getElementById('text-count');
const countedText = document.querySelector('.counted-text');
const indicator = document.querySelector('.indicator');
const toggleInclude = document.querySelector('.include-input');
const mess = document.querySelector('.start');

const setCounted = () => {
    let textTotalCount = Array.from(textOrigin.value);
    if (!toggleInclude.checked) {
        textTotalCount = textTotalCount.filter(char => char !== " ");
        countedText.innerText = textTotalCount.length;
    } else {
        countedText.innerText = textTotalCount.length;
    }
}
document.documentElement.addEventListener('keyup', ()=>{
    textOrigin.focus();
    // textOrigin.focus && mess.style.display = 'none';
});

textOrigin.addEventListener('keyup', () => {
    setCounted();
});
textOrigin.addEventListener('focus',(e)=> {
    mess.style.display = "none";
});

textOrigin.addEventListener('blur',(e)=> {
    mess.style.display = "initial";
});

toggleInclude.addEventListener('change', () => {
    toggleInclude.checked ? indicator.textContent = "(spaces included)" :
        indicator.textContent = "(spaces not included)";

    setCounted();
});



