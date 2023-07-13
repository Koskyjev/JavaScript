let introEl = document.getElementById("intro")

let Akeel = {
    name: "Akeel",
    isGraduated: true, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["HTML", "CSS", "JS"]
}

let John = {
    name: "John",
    isGraduated: false, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["Python", "intro-to-web-dev", "calculus"]
}

let player = { 
    choice: null 
};

function playRock() {
    player.choice = "Rock"
    playGame()
}


function playGame() {

}



John.name = ""



    let Nick = {
    name: "Nick",
    isGraduated: false, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["Python", "intro-to-web-dev"]
}


let students = [Akeel, John, Nick ]

   
function objects() {
   
    // introEl.textContent = 
    // `Name: ${students.Akeel.name}

    // GPA: ${students.Akeel.Gpa}
    // `

    for(let i = 0; i < students.length; i++) {
        console.log(students[i].name)

        if(students[i].isGraduated === true) {
            console.log(`Congrats ${students[i].name}, You have Graduated!! `)
        } else {
            console.log(`Hang on`)
        }
        for(let j = 0; j < students[i].courses.length; j++) {
            console.log(` ${students[i].courses[i]}`)
        }
    }
}


function returnFunc() {
   
    function getFastestTime(player1Time, player2Time) {
        if(player1Time < player2Time) {
            return player1Time
        } else if(player2Time < player1Time) {
            return player2Time
        } else {
            return player1Time
        }
    }

    let fastestTime = getFastestTime(102, 106)

    console.log(fastestTime)

    function greeting(name) {
        console.log(`Hello ${name}`)
    }
    greeting("Akeel")
    greeting("John")

}


function eventListenerExample() {

    let studentInfoBtn = document.getElementById("student-info-btn")
    
    studentInfoBtn.addEventListener("click", function() {
        objects()
        console.log("Button Clicked")
    })

}



function randomNumberFunction() {
    // Random number between 0 and 1
    let randomNumber = Math.random()
    // console.log(randomNumber)

        // Random number between 0 and 6

    let randomNumber6 = Math.random() * 6
    // console.log(randomNumber6)

    1-6 
    let wholeNumber = Math.floor(4.23232323423534536456)

    // console.log(wholeNumber)

    let number= Math.floor(Math.random()* 3)

    console.log(number)

}


function formValidation() {
let userName = document.getElementById("name")
let age = document.getElementById("age")
let submitButton = document.getElementById("submit")
let errorMsg = document.getElementById("verify")
let welcomeMsg = document.getElementById("welcome")



function handleSubmit() {
    errorMsg.textContent = ""
    welcomeMsg.textContent = ""
     userInputName = userName.value.trim()
    userInputAge = parseInt(age.value)

    if(userInputName === "") {
        errorMsg.textContent = "Please Input values"
        return
    } 

    // Returns the data type of a variable
    console.log(typeof userInputAge)

    if(userInputName === "Akeel" && userInputAge === 24 ) {
        welcomeMsg.textContent = "Welcome Akeel"
    } else {
        errorMsg.textContent = "Goodbye Stranger"
    }
   
}


submitButton.addEventListener("click", function() {
       handleSubmit()
})

}




// innerHTML
//*********************UPDATING INNER HTML*****************
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");
let colour = document.getElementById("colour");
let addBtn = document.getElementById("add")
let resetBtn = document.getElementById("reset")

let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

function displayList() {
  ulEl.innerHTML = "";
  for (let i = 0; i < shoppingList.length; i++) {
    ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>";
  }
}

displayList()

function handleSubmit() {

    userInputColour = colour.value.trim()

    if(userInputColour === "") {
        return
    } 

    shoppingList.push(userInputColour)
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

    ulEl.innerHTML = ""
    console.log(shoppingList)
    console.log(shoppingList.length)
    for (let i = 0; i < shoppingList.length; i++) {
        ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>";


        // // rendering element using createElement()
        // const li = document.createElement("li");
        // li.textContent = shoppingList[i];
        // ulEl.append(li);
    }
}

addBtn.addEventListener("click", function() {
       handleSubmit()
})


resetBtn.addEventListener("dblclick", function() {
       localStorage.clear()
       displayList()

})



// Render the leads in the unordered list using ulEl.textContent instead of console.logging the shoppingList array items
// for (let i = 0; i < shoppingList.length; i++) {



//   ulEl.textContent += shoppingList[i] + " ";

  // render the element in a li tag using innerHTML
  // CREATING ELEMENTS WITH JAVASCRIPT (Manipulating the DOM)
//   ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>";

  // rendering element using createElement()
//   const li = document.createElement("li");
//   li.textContent = shoppingList[i];
//   ulEl.append(li);
// }

// //******************************************************







// LocalStorage
// Get elements
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const resetBtn = document.getElementById("reset-btn");
// const ulEl = document.getElementById("ul-el");

// // Initialize the shopping list
// let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

// // Function to update the display list
// function displayList() {
//   ulEl.innerHTML = "";
//   for (let i = 0; i < shoppingList.length; i++) {
//     ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>";
//   }
// }

// // Initially display the list
// displayList();

// // Add item to the list
// inputBtn.addEventListener("click", function () {
//   if (inputEl.value.trim() !== "") {
//     shoppingList.push(inputEl.value.trim());
//     localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
//     displayList();
//     inputEl.value = ""
//   }
// });

// // Clear items in the list
// resetBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   shoppingList = []; // Clear the array
//   displayList();
// });







// Thursday 
// Hosting 
// PDF in Portfolio Website
// const vs let vs var