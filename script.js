let display = document.getElementById("display");

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value;

        // Handling division by zero
        if (expression.includes("/0")) {
            display.value = "Error";
            return;
        }

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}
