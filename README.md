# Base Converter

A web-based number base converter built using HTML, CSS, and JavaScript. The application allows users to convert numbers between different numeral systems through a simple, interactive interface.

## Live Demo

[Try Base Converter](https://liorab1.github.io/Base-Converter/)

## Features

- Convert numbers between Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16).
- Select source and target bases using interactive buttons.
- Validate user input according to the selected numeral system.
- Display conversion results instantly.
- Provide error messages for invalid input or missing selections.
- Prevent conversion when the source and target bases are identical.

## Technologies Used

- **HTML5** – Application structure
- **CSS3** – User interface styling
- **JavaScript** – Conversion logic, input validation, and DOM manipulation

## How It Works

1. Enter a number in the input field.
2. Select the original number base (FROM).
3. Select the desired number base (TO).
4. Click the Convert button.
5. View the converted result.

### Example

Convert binary `1010` to decimal:

**Input:** 1010 (Base 2)

**Output:** 10 (Base 10)

## Implementation Details

The application uses JavaScript's built-in `parseInt()` and `toString()` methods for number base conversion.

Regular expressions are used to validate input characters for each supported base.

DOM event listeners manage button selections, user interactions, and result display.

## Run Locally

1. Clone the repository:

   `git clone https://github.com/LiorAb1/Base-Converter.git`

2. Open the project folder.
3. Open `index.html` in a web browser.

No additional dependencies or installation are required.

## Author

[LiorAb1](https://github.com/LiorAb1)
