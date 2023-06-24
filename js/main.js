const form = document.querySelector("#form");
const numberOne = document.querySelector("#number-one");
const numberTwo = document.querySelector("#number-two");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    if(numberOne.value === "") { 
        alert("Please, fill your first number");
        return;
    }

    if(numberTwo.value === "") { 
        alert("Please, fill your second number");
        return;
    }
    
    if(numberTwo.value <= numberOne.value){
        alert("Number two is smaller than number one. Please, try again");
        return;
    }

    form.submit();
});