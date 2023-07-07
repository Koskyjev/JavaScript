// Define four functions: add(), subtract(), divide(), multiply()
// Each function should:
// 1. Retrieve the current values of the input fields with id="num1-el" and id="num2-el"
//    (use Number() to ensure these are treated as numbers, not strings)
// 2. Perform the relevant calculation
// 3. Update the paragraph with id="sum-el" to display the result

// For example, if the user enters "8" and "2", and then clicks the "Add" button,
// the add() function should render "Sum: 10" inside the paragraph with id="sum-el"

    
function addNum() {
   let x = Number(document.getElementById("num1-el").value);
   let y = Number(document.getElementById("num2-el").value);
   console.log(y);
    document.getElementById("sum-el").textContent = x+y;
}

function subNum() {
    let x = Number(document.getElementById("num1-el").value);
    let y = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = x-y;
}

function divNum() {
    let x = Number(document.getElementById("num1-el").value);
    let y = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent =x/y;
}

function multNum() {
    let x = Number(document.getElementById("num1-el").value);
    let y = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = x*y;
}