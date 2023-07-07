
function checkAge() {
let age = document.getElementById("yourAge");
let eligibility = document.getElementById("result");
    if (age.value >= 18) {eligibility.textContent ="You are eligible to vote!"}
    else {eligibility.textContent = "You are too young to vote!"}
}
checkAge()




function Grade() {
let score = document.getElementById("score");
let grade = document.getElementById("grade");
    if (score.value >= 90){grade.textContent = "Grade: A"}
    else if (80 <= score.value){grade.textContent ="Grade: B"}
    else if (70 <= score.value){grade.textContent = "Grade: C"}
    else if (60 <= score.value){grade.textContent = "Grade: D"}
    else {grade.textContent = "Grade: F"}
}
Grade()


let favoriteColors = ["white", "black", "green", "blue", "red", "grey"]
function displayColors(){
console.log(favoriteColors[0]);
console.log(favoriteColors[1]);
console.log(favoriteColors[2]);
console.log(favoriteColors[3]);
console.log(favoriteColors[4]);
console.log(favoriteColors[5]);
}
displayColors()



for (let count = 10; count >= 1; count -= 1) {
    console.log(count)
}



function planVacation(){
    let isVacationTime = false;
    if (isVacationTime === true) {console.log("Enjoy your vacation!")}
    else {console.log("Hang up here! Vacation time is coming!")}
}
planVacation()



