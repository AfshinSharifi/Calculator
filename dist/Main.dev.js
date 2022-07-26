"use strict";

var display = document.querySelector('#display');
var buttons = document.querySelectorAll('button');
var operators = document.querySelectorAll('.operator');
var theme = document.querySelector('#cTheme');
disable();
buttons.forEach(function (button) {
  return button.addEventListener('click', function (ev) {
    var button = ev.target;
    var buttonValue = button.innerText;

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
  });
});

function bDisable() {
  buttons.forEach(function (button) {
    return button.disabled = true;
  });
}

function disable() {
  operators.forEach(function (operator) {
    return operator.disabled = true;
  });
}

function enable() {
  operators.forEach(function (operator) {
    return operator.disabled = false;
  });
}

theme.addEventListener('click', function () {
  var light = document.querySelector('.light');
  var dark = document.querySelector('.dark');

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