var calDisplay = document.querySelector('.calculator__display');
var calculator = document.querySelector('.calculator');
var keys = calculator.querySelector('.calculator__keys');

const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        var key = e.target;
        var action = key.dataset.action;
        var number = key.textContent;
        var displayNum = calDisplay.textContent;
        var previousKey = calculator.dataset.previousKey;
        
        if (!action) {
            console.log('Number key')
            if (displayNum === '0' || previousKey === 'operator') {
                calDisplay.textContent = number;
            } else {
                calDisplay.textContent += number;
            }
            calculator.dataset.previousKey='';
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            console.log('operator key')
            key.classList.add('is-depressed')
            calculator.dataset.previousKey = 'operator';
            calculator.dataset.firstValue = calDisplay.textContent;
            calculator.dataset.operator = action;
        }
        if (action === 'clear') {
            console.log('clear button')
            calDisplay.textContent = '0';
            calculator.dataset.previousKey='';
        }
        if (action === 'calculate') {
            console.log('calculate button')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = calDisplay.textContent;
            calDisplay.textContent = calculate(firstValue, operator, secondValue);
            console.log(firstValue)
            console.log(operator)
            console.log(secondValue)
            
        }
        if (action === 'decimal') {
            console.log('decimal')
            if(!calDisplay.textContent.includes('.')){
              calDisplay.textContent+='.';
            }
        }
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

    }
});



