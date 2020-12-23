
const btnLeapYear = document.querySelector("#btn-checkLeapYear");

function clickHandler(){
    const inputDob = document.querySelector("#input-dob");
    const date = new Date(inputDob.value);
    const year = date.getFullYear();

    
    let yearOutput;    
    if(year % 400 === 0){
        yearOutput = "Leap Year";
    } else if(year % 100 === 0){
        yearOutput = "Not a Leap Year";
    } else if(year % 4 === 0){
        yearOutput = "Leap Year";
    } else{
        yearOutput = "Not a Leap Year";
    }

    const outputLeapYear = document.querySelector("#p-outputYear");
    outputLeapYear.innerHTML = yearOutput;
}


btnLeapYear.addEventListener("click", clickHandler);