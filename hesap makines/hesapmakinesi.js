let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let input = display.value;
        let numbers = input.split(/[\+\-\*\/]/);
        if (numbers.length > 2) {
            display.value = "Error Sadece İki Sayi!";
        } else {
            display.value = eval(input);
        }
    } catch (e) {
        display.value = "Error";
    }
}
