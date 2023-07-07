let dogCount = 0;

function addDogs() {
    dogCount++
    document.getElementById("dogCounter").textContent = dogCount + " dog(s)"
}

function delDogs() {
    dogCount--
    document.getElementById("dogCounter").textContent = dogCount + " dog(S)"
}