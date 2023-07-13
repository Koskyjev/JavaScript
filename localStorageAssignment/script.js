
let fruit = document.getElementById("fruit");
const ulEl = document.getElementById("ul-el");
let resetButton = document.getElementById("reset");
let addButton = document.getElementById("add");
let favoriteFruits = JSON.parse(localStorage.getItem("favoriteFruits")) || [];

function displayList(){
    ulEl.innerHTML = "";
    for (let i = 0; i < favoriteFruits.length; i++) {
        ulEl.innerHTML += "<li>" + favoriteFruits[i] + "</li>";
    }
}
displayList()

function addFruits() {
    let errorMsg = document.getElementById("verify");
    errorMsg.textContent = "";
    let inputFruit = fruit.value.trim()

    if (inputFruit === "") {
        errorMsg.textContent = "Add fruit in a list"
        return
    }

    favoriteFruits.push(inputFruit)
    localStorage.setItem("favoriteFruits", JSON.stringify(favoriteFruits));

    ulEl.innerHTML = ""
    console.log(favoriteFruits)
    console.log(favoriteFruits.length)

    for (let i = 0; i < favoriteFruits.length; i++) {
        ulEl.innerHTML += "<li>" + favoriteFruits[i] + "</li>";
    }
}

addButton.addEventListener("click", function(){
    addFruits()
})

resetButton.addEventListener("dblclick", function(){
    favoriteFruits = []
    localStorage.clear()
    displayList()
})