//Creating variables

const userInput = document.querySelector("#display");
let expression = "";

//Functions

function press (num) {
  expression += num;
  userInput.value = expression;
};

function equal () {
  userInput.value = eval(expression);
  expression = "";
};

function erase () {
  expression = "";
  userInput.value = expression;
};