const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const theme = document.querySelector('#cTheme');
disable();
buttons.forEach(button => button.addEventListener('click', ev => {
    const button = ev.target;
    const buttonValue = button.innerText;
    if (ev.target.classList.contains('operator')) {
        switch (buttonValue) {
            case 'C':
                display.value = '';
                break;
            case '=':
                display.value = eval(display.value);
                break;
            default:
                display.value += buttonValue;
                disable();
                break;
        }
    } else {
        display.value += buttonValue;
        enable();
    }
}));

function bDisable() {
    buttons.forEach(button => button.disabled = true)
}

function disable() {
    operators.forEach(operator => operator.disabled = true);
}

function enable() {
    operators.forEach(operator => operator.disabled = false);
}
theme.addEventListener('click', () => {
    const light = document.querySelector('.light');
    const dark = document.querySelector('.dark');
    if (theme.checked) {
        document.querySelector('.numbers').classList.add('dark1');
        light.style.display = "inline";
        dark.style.display = "none";
    } else {
        document.querySelector('.numbers').classList.remove('dark1');
        light.style.display = "none";
        dark.style.display = "inline";
    }
});