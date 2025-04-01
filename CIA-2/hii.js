function checknum(){
    let userInput;
    while(true){
        userInput = prompt("Enter a valid number : ");
        if(userInput == null){
            document.getElementById("result").innerText="Input Cancelled";
            return;
        }
    
    let number = Number(userInput);
    if(!isNaN(number) && userInput.trim() != ""){
        document.getElementById("result").innerText=`Enter number :  ${number}`;
        return;
    }
    else{
        alert("Invalid input : Please enter a valid number");
    }
}
}