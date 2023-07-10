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



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
if (strokes === 1) {
return names[0];
} else if (strokes <= par - 2) {
return names[1];
} else if (strokes === par - 1) {
return names[2];
} else if (strokes === par) {
return names[3];
} else if (strokes === par + 1) {
return names[4];
} else if (strokes === par + 2) {
return names[5];
} else if (strokes >= par + 3) {
return names[6];
} else {
return "Change Me";
}
}
console.log(golfScore(5, 5))