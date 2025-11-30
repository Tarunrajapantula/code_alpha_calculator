const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
}
function backspace() {
    const display = document.getElementById("display");
    if (display && display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}
function percentage() {
    try {
        let display = document.getElementById("display").value;

        // Split by %
        let parts = display.split("%");

        if (parts.length === 2) {
            let a = parseFloat(parts[0]); // first number
            let b = parseFloat(parts[1]); // second number

            let result = a * (b / 100);

            document.getElementById("display").value = result;
        } else {
            document.getElementById("display").value = "Error";
        }
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
function insert(value) {
    let display = document.getElementById("display");

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}
function clearError() {
    let display = document.getElementById("display");
    if (display.value === "Error") {
        display.value = "";
    }
}



