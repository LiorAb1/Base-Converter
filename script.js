const fromButtons = document.querySelectorAll('#container1 .base-buttons button');
const toButtons = document.querySelectorAll('#container2 .base-buttons-result button');
const inputField = document.getElementById('number-input');
const resultDisplay = document.querySelector('.result-text');
const convertBtn = document.querySelector('.convert-button');

/* Function that sets up click events for a group of buttons.
   When one button is clicked, it becomes selected and the rest are deselected. */
function setupButtonEvents(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
}

/* Function that returns the selected base (e.g., 2, 8, 10, 16) from a button group.
   If no button is selected, it returns null. */
function getSelectedBase(containerSelector) {
    const container = document.querySelector(containerSelector);
    const selectedButton = container.querySelector('.selected');
    return selectedButton ? parseInt(selectedButton.getAttribute('data-base')) : null;
}

/* Function that converts a number string from one base to another.
   Returns the converted value as an uppercase string, or null if the input is invalid. */
function convertBase(numberStr, fromBase, toBase) {
    const number = parseInt(numberStr, fromBase);
    if (isNaN(number)) {
        return null;
    }
    return number.toString(toBase).toUpperCase();
}

/* Function that checks if a given input string is valid for a specified base.
   Supports base 2 (binary), 8 (octal), 10 (decimal), and 16 (hexadecimal). */
function isValidInput(input, base) {
    const validChars = {
        2: /^[0-1]+$/,       // Binary (0 or 1)
        8: /^[0-7]+$/,       // Octal (0-7)
        10: /^[0-9]+$/,      // Decimal (0-9)
        16: /^[0-9a-fA-F]+$/ // Hexadecimal (0-9, A-F or a-f)
    };
    return validChars[base]?.test(input) || false;
}

/* Function that displays an error message using an alert
   and then refocuses on the input field. */
function showError(message) {
    alert(message);  
    inputField.focus();
}

/* Function that handles the click event of the "Convert" button.
   It performs the conversion process: validates input, gets the selected bases, 
   converts the number, and displays the result. */
convertBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    const inputValue = inputField.value.trim();
    const fromBase = getSelectedBase('#container1');
    const toBase = getSelectedBase('#container2');

    if (!inputValue) {
        showError('Please enter a number.');
        return;
    }
    if (fromBase === null || toBase === null) {
        showError('Please select both FROM and TO bases.');
        return;
    }
    if (fromBase === toBase) {
        showError('FROM and TO bases are the same. No conversion needed.');
        return;
    }
    if (!isValidInput(inputValue, fromBase)) {
        showError(`Invalid input for base ${fromBase}. Please enter a valid number.`);
        return;
    }

    const convertedValue = convertBase(inputValue, fromBase, toBase);
    if (convertedValue === null) {
        showError('Conversion failed – invalid number for this base.');
        return;
    }

    resultDisplay.innerHTML = `<strong>Result:</strong> (${fromBase}) ${inputValue} → (${toBase}) ${convertedValue}`;
    inputField.value = ''; 
});

setupButtonEvents(fromButtons);
setupButtonEvents(toButtons);
