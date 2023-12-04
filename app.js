//Creating variables

const calculator = document.getElementsByClassName('.calculator');
const keys = document.getElementsByClassName('.calculator-keys');
const display = document.getElementsByClassName('.calculator-display');

//Adding event listeners

function main () {
    keys.addEventListener('click', e => {
    //
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));
      calculator.dataset.previousKeyType = 'operator';
    };
    //
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      };
    };
    //
    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    };
    //
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      key.classList.add('is-depressed');
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    };
    if (action === 'calculate') {
      const secondValue = displayedNum;
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      display.textContent = calculate(firstValue, operator, secondValue);
    };
    const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    };
      return result;
    };
    if (action === 'clear') {
      console.log('clear key!');
    };
  });
};