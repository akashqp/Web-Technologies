let currentVal = '';
let memoryVal = '';
let operator = '';

function buttonClicked(btnVal) {
  switch (btnVal) {
    case 'C':
      currentVal = '';
      memoryVal = '';
      operator = '';
      updateScreen('0');
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      if (operator === '') {
        memoryVal = currentVal;
        operator = btnVal;
        currentVal = '';
      } else {
        let result = calculate(parseFloat(memoryVal), parseFloat(currentVal), operator);
        updateScreen(result);
        memoryVal = result;
        operator = btnVal;
        currentVal = '';
      }
      break;
      default:
        currentVal += btnVal;
        updateScreen(currentVal);
        break;
      }
    }
    function calculate(num1, num2, op) {
      let result = 0;
      switch (op) {
      case '+':
      result = num1 + num2;
      break;
      case '-':
      result = num1 - num2;
      break;
      case '*':
      result = num1 * num2;
      break;
      case '/':
      result = num1 / num2;
      break;
      case '=':
      result = num2;
      break;
      }
      return result;
      }
      
      function updateScreen(val) {
      let screen = document.querySelector('.screen');
      screen.value = val;
      }
    