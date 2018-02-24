/* Your Code starts from Here */
/* Your Code starts from Here */
let firstNumber:HTMLInputElement = document.querySelector('#firstNumber') as HTMLInputElement;
let secondNumber:HTMLInputElement = document.querySelector('#secondNumber') as HTMLInputElement;
let operator:HTMLButtonElement = document.querySelector('#operator') as HTMLButtonElement;
let equalsButton:HTMLButtonElement = document.querySelector('#equals-button') as HTMLButtonElement;
let plusButton:HTMLButtonElement = document.querySelector('#plus-button') as HTMLButtonElement;
let minusButton:HTMLButtonElement = document.querySelector('#minus-button') as HTMLButtonElement;
let divideButton:HTMLButtonElement = document.querySelector('#divide-button') as HTMLButtonElement;
let multiplyButton:HTMLButtonElement = document.querySelector('#multiply-button') as HTMLButtonElement;
let clearButton:HTMLButtonElement = document.querySelector('#clear-button') as HTMLButtonElement;
let resultButton:HTMLButtonElement = document.querySelector('#result-button') as HTMLButtonElement;


function changeOperatorPlus(){
    operator.innerHTML = '+';
}

function changeOperatorMinus(){
   operator.innerHTML = '-';
}

function changeOperatorDivide(){
    operator.innerHTML = '/';
}

function changeOperatorMultiply(){
   operator.innerHTML = '*';
}



function findResults(){
    let num1:number = parseInt(firstNumber.value);
    let num2:number = parseInt(secondNumber.value);
    let operation:string = operator.innerHTML.trim();
    let result = 0;
    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 0;
            break;
    }
    resultButton.innerHTML = result + "";
}



function clearAll(){
    firstNumber.value = "";
    secondNumber.value = "";
    operator.innerHTML = '+';
    resultButton.innerHTML = "RESULT";
}

// Event Listeners
plusButton.addEventListener('click',changeOperatorPlus);
minusButton.addEventListener('click',changeOperatorMinus);
divideButton.addEventListener('click',changeOperatorDivide);
multiplyButton.addEventListener('click',changeOperatorMultiply);
clearButton.addEventListener('click',clearAll);
equalsButton.addEventListener('click',findResults);
