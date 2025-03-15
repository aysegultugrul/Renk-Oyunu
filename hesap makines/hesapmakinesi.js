function appendCharacter(char) {
    document.getElementById("display").value += char;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");

    try {
        let result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            throw new Error("Sıfıra bölünmez");
        }
        display.value = result;
    } catch (error) {
        display.value = "Hata: " + error.message;
    }
}
