'use strict';

window.addEventListener('load', () => {

    const btnEls = document.querySelectorAll('button');
    const inputEl = document.getElementById('value');
    const clearBtnEl = document.querySelector('.btn--clear');
    const equalBtnEl = document.querySelector('.btn--equal');

    function calc() {
        try {
            inputEl.value = eval(inputEl.value);
        } catch {
            const oldValue = inputEl.value;
            const newValue = 'Недопустимое выражение';

            inputEl.style.color = 'red';
            inputEl.disabled = true;
            inputEl.value = newValue;
            setTimeout(() => {
                inputEl.style.color = '#000';
                inputEl.value = oldValue;
                inputEl.disabled = false;
                inputEl.focus();
            }, 2000);
        }
    }

    btnEls.forEach( (btn) => {
        btn.addEventListener('click', (eventObj) => {
            let btnEl = eventObj.target;
            let btnElText = btnEl.textContent;
            inputEl.value += btnElText;
        });
    });

    clearBtnEl.addEventListener('click', () => {
        inputEl.value = '';
        inputEl.focus();
    });

    equalBtnEl.addEventListener('click', calc);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputEl.value === '') {
                return;
            }
            calc();
        }
    });
});