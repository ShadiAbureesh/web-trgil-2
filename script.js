const resultField = document.querySelector('.result');

function appendChar(character) {
    if (character === 'pi') {
        resultField.value += Math.PI;
    } else if (character === 'e') {
        resultField.value += Math.E;
    } else if (character === '**2') {
        resultField.value += '**2';
    } else if (character === '1/') {
        resultField.value += '1/(';
    } else if (character === 'sqrt') {
        resultField.value += 'Math.sqrt(';
    } else if (character === 'abs') {
        resultField.value += 'Math.abs(';
    } else if (character === 'exp') {
        resultField.value += 'Math.exp(';
    } else if (character === 'mod') {
        resultField.value += '%';
    } else if (character === 'lpar') {
        resultField.value += '(';
    } else if (character === 'rpar') {
        resultField.value += ')';
    } else if (character === 'factorial') {
        let number = parseInt(resultField.value);
        resultField.value = factorial(number);
    } else if (character === 'log') {
        resultField.value += 'Math.log10(';
    } else if (character === 'ln') {
        resultField.value += 'Math.log(';
    } else {
        resultField.value += character;
    }
}

function deleteAll() {
    resultField.value = '';
}

function deleteLastChar() {
    resultField.value = resultField.value.slice(0, -1);
}

function solve() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function plusMinus() {
    if (resultField.value.charAt(0) === '-') {
        resultField.value = resultField.value.slice(1);
    } else {
        resultField.value = '-' + resultField.value;
    }
}

function notImplemented() {
    alert('This feature is not implemented yet.');
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
