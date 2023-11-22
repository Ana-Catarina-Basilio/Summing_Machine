function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function calculateSum() {
    var num1 = getValue('num1');
    var num2 = getValue('num2');
    var resultElement = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        alert('Summing requires some numbers, right?');
        return;
    }

    var sum = parseInt(num1) + parseInt(num2);
    resultElement.innerHTML = 'Your result is: ' + sum;
}

function getValue(id) {
    return document.getElementById(id).value;
}
