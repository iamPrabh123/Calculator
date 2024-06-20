// Functions to append display in calculator 

function appendToDisplay(value) {
    const display = document.getElementById('display')
    display.value += value;
}

// function to clear value in calculator

function ClearDisplay() {
    const display = document.getElementById('display')
    display.value = ''
}

// function to apply backspace in calculator

function Backspace() {
    const display = document.getElementById('display')
    display.value = display.value.slice(0 , -1)
}

// function to calculate in calculator

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
