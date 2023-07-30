//Task 1

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

// Task 2

// assigning value to variable 
const kelvin = 0;

// turning kkelvin into celsius
let celsius = kelvin - 273;

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log (`The temperature is ${newton} degrees newton.`)
// turning celsius into fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//round down the number after calculation
fahrenheit = Math.floor(fahrenheit);

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//Task 3

// declare my age
const myAge = 38;
// first 2 years of dog´s age equel to 10.5 human years
let earlyYears = 2;
earlyYears *= 10.5;
// Since we already accounted for the first two years, taking the myAge variable, and subtracting 2 from it
let laterYears = myAge - earlyYears;
//calculate the number of dog years

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears/10.5 + laterYears/4;
console.log(myAgeInDogYears);

const myName = "Constantine".toUpperCase();


console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

//Generating random number from 0 to 7 and answer on a user´s question depending on random number
let userName = "Jane";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
const userQuestion = " how´s everything?";
console.log(userName + userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
switch (randomNumber){
case 0:
console.log("It is certain");
break;
case 1:
console.log("It is decidedly so");
break;
case 2:
console.log("Reply hazy try again");
break;
case 3:
console.log("Cannot predict now");
break;
case 4:
console.log("Do not count on it");
break;
case 5:
console.log("My sources say no");
break;
case 6:
console.log("Outlook not so good");
break;
case 7:
console.log("That´s exactly how it is");
break;
default:
console.log("Signs point to yes");
}

// assigning race time based on age and registration of runners
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly === true) {
 console.log(raceNumber + " will race at 9:30am");
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log (raceNumber + " will race at 11:00am");
} else if (runnerAge < 18) {
  console.log (raceNumber + " will race at 12:30pm");
} else { console.log("Please, see the registration desk")}


//function expression
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
  return true;}
  else {
  return false;}};

/* arrow function is the same as previous 
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

const waterCheck = plantNeedsWater('Tuesday')
console.log(waterCheck)



// concise body arrow function

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
// same as 

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius"
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

/*
Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.
*/

//ARRAYS

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// 
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('clean fishtank', 'cook dinner');

console.log(chores)

//
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop()
console.log(chores)

//
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex= groceryList.indexOf('pasta');
console.log(pastaIndex)

//
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);

//Nested Arrays
let numberClusters = [[1, 2], [3,4], [5,6]];

const target = numberClusters[2][1];

//
