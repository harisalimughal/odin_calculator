let a = '';
let b = '';
let operator = '';
let resultDisplayed = false;  

// Number buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {

        if (resultDisplayed) {
            a = '';
            b = '';
            operator = '';
            resultDisplayed = false;  
        }
        
        if (operator === '') {
            a += this.innerHTML;
        } else {
            b += this.innerHTML;
        }

        updateDisplay();
    });
});

// Operator buttons
document.querySelectorAll('.op').forEach(button => {
    button.addEventListener('click', function(event) {

        if (a !== '') { 
            operator = this.innerHTML;
        }

        updateDisplay();
    });
});

// Equal button
document.getElementById('equal').addEventListener('click', function(event) {
    event.preventDefault();  
    let result = 0;

    let numA = parseFloat(a);
    let numB = parseFloat(b);

    switch (operator) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            if (numB === 0) {
                alert("Cannot divide by zero!");
                return;  // Stop if division by zero
            }
            result = numA / numB;
            break;
    }

    // Display the result
    document.getElementById('resultDisplay').innerHTML = result;
    a = result.toString();  // Store result in `a` for further calculations
    b = '';  // Clear `b`
    operator = '';  // Reset operator
    resultDisplayed = true;  // Set result displayed flag
});

// Clear button
document.getElementById('clear').addEventListener('click', function(event) {

    a = '';
    b = '';
    operator = '';
    resultDisplayed = false;
    document.getElementById('resultDisplay').innerHTML = '0';
});

// Update display function
function updateDisplay() {
    let display = document.getElementById('resultDisplay');
    if (operator === '') {
        display.innerHTML = a;
    } else if (b === '') {
        display.innerHTML = a + " " + operator;
    } else {
        display.innerHTML = a + " " + operator + " " + b;
    }
}
