function checkNumber() {
    let userInput;
    while (true) {
        userInput = prompt("Enter a number:");

        if (userInput === null) {
            document.getElementById("result").innerText = "Input canceled.";
            return;
        }

        let number = Number(userInput);

        if (!isNaN(number) && userInput.trim() !== "") {
            document.getElementById("result").innerText = `You entered: ${number}`;
            return;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }
}