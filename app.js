//Creating variables

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const key = e.target;
const action = key.dataset.action;

//Adding event listeners

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   // Do something
 } else if (!action) {
    console.log('number key!');
  } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    console.log('operator key!');
  } else if (action === 'decimal') {
    console.log('decimal key!');
  } else if (action === 'clear') {
    console.log('clear key!');
  } else if (action === 'calculate') {
    console.log('equal key!');
  };
});