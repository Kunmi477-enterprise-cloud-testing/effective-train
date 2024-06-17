document.getElementById('calculator').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);

    var operation = document.getElementById('operation').value;

    var result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
  {
    document.getElementById('result').textContent = 'Result: ' + result;
};
