const display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else if (display.value.length < 6) {
        display.value += value;
    }
}

function resetDisplay() {
    display.value = "0";
}

function deleteLastCharacter() {
    if (display.value !== "0" && display.value !== "Error") {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        const result = eval(display.value);
        if (result.toString().length <= 6) {
            display.value = result.toString();
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
}
