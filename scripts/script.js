//adding numbers to textfield
var editField =  document.querySelector('#numText');
var numbers = document.querySelectorAll(".numbers p");
var operators = document.querySelectorAll(".operations p");
var numArray = Array.apply(null, numbers);
var opArray = Array.apply(null,operators);

var isDecimalAllowed = true;
numArray.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.innerHTML);
        if(element.innerHTML == ".") {
            if(isDecimalAllowed) {
                editField.value += element.innerHTML;
                isDecimalAllowed = false;
            } else {
                alert("No more than one decimal point allowed in a number. Please try again.");
            }
            
            console.log(isDecimalAllowed);
        }
        else if(element.innerHTML == "DEL") {
            editField.value = editField.value.slice(0, -1);
        } else {
            editField.value += element.innerHTML;
        }
        
    });
});

opArray.forEach(element => {
    element.addEventListener("click", function(){
        
        if(element.innerHTML == "=") {
            let res = eval(editField.value)
            if(res == Infinity) {
                alert("You just divided by zero! Try again");
                editField.value = "";
            } else {
                if(isNaN(res)) {
                    alert("0/0 always returns Nan, try again");
                    editField.value = "";
                } else {
                    editField.value = eval(editField.value)
                } //BUG FIX FOR decimal points
                if(res.indexOf(".") == -1){
                    isDecimalAllowed = true;
                }
                
            }
            
        } else {
            console.log("spliced and found "+editField.value.slice(-1))
            let op = editField.value.slice(-1)
            if( op == "-" || op == "+" || op == "*" || op == "/") {
                editField.value = editField.value.slice(0, -1);
                editField.value += element.innerHTML;
            } else if(editField.value != "") {
                editField.value += element.innerHTML;
            }
        }
    });
});

//the clear button
var clearButton = document.querySelector(".calc-field span");
clearButton.addEventListener("click", function() {
    editField.value = "";
});
