let dogCount = 0;
let catCount = 0;

function addDogs() {
    dogCount++
    document.getElementById("dogCounter").textContent = dogCount + " dog(s)"
}

function delDogs() {
    dogCount--
    document.getElementById("dogCounter").textContent = dogCount + " dog(s)"
}

function addCats() {
    catCount++
    document.getElementById("catCounter").textContent = catCount + " cat(s)"
}

function delCats() {
    catCount--
    document.getElementById("catCounter").textContent = catCount + " cat(s)"
}
