for (let i = 1; i <=30; i++) {
if (i % 3 === 0) {
    console.log("Fizz")}
else {
    console.log(i)}
}

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i]*5)
}


function stringArrays() {
let wordsArray = ["cat", "dog", "window", "bottle", "car", "JaavScript"]
for (let i = 0; i < wordsArray.length; i ++) {
    if (wordsArray[i].trim().length > 4) {
        console.log("Long word alert")}
    else {
        console.log(wordsArray[i])}
}}
stringArrays()



let number = [1, 2, 3, 4, 5];
let x = document.getElementById("myParagraph");
for (let number = 1; number <= 5; number += 1) {
    x.textContent += number
}
console.log(x.textContent)




for (let i = 1; i <= 20; i += 1) {
    if(i % 2 === 1) {
        console.log("Odd number")}
    else {
        console.log("Even number")
    }
}