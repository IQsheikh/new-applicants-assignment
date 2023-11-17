// Add your JavaScript here
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;

            if (buttonText === '=') {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonText === 'AC') {
                currentInput = '';
                display.value = '';
            } else if (buttonText === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else {
                currentInput += buttonText;
                display.value = currentInput;
            }
        });
    });
});
