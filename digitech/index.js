
let students = [
    {
        firstName : "John",
        lastName : "Doe",
        age : "20",
        location : "New York",
        country : "USA",
        IsLocatedInImo : false,
    },

    {
        firstName : "Jane",
        lastName : "Smith",
        age : "22",
        location : "Imo",
        country : "Nigeria",
        IsLocatedInImo : true,
    },

    {
        firstName : "Michael",
        lastName : "Johnson",
        age : "19",
        location : "Lagos",
        country : "Nigeria",
        IsLocatedInImo : false,
    },

    {
        firstName : "Emily",
        lastName : "Davis",
        age : "21",
        location : "Imo",
        country : "Nigeria",
        IsLocatedInImo : true,
    },

    {
        firstName : "David",
        lastName : "Wilson",
        age : "23",
        location : "Abuja",
        country : "Nigeria",
        IsLocatedInImo : false,
    },

    {
        firstName : "Sarah",
        lastName : "Onyeka",
        age : "20",     
        location : "Imo",
        country : "Nigeria",
        IsLocatedInImo : true,
    },

    {
        firstName : "James",
        lastName : "Brown",
        age : "24",
        location : "Port Harcourt",
        country : "Nigeria",
        IsLocatedInImo : false,
    },

    {
        firstName : "Olivia",
        lastName : "Smith",
        age : "22",
        location : "Imo",
        country : "Nigeria",
        IsLocatedInImo : true,
    },

    {
        firstName : "William",
        lastName : "Johnson",
        age : "21", 
        location : "Kano",
        country : "Nigeria",
        IsLocatedInImo : false,
    },

    {
        firstName : "Ava",
        lastName : "Davis",
        age : "20",    
        location : "Ontario",
        country : "Canada",
        IsLocatedInImo : false,
    }
];

console.log(students);


function NumberSquare(number) {
return number * number
}

console.log(NumberSquare(5))

function TrianglePerimeter(value) {
    return value + value + value
}

console.log(TrianglePerimeter(17))

function CubeVolume(value) {
    return value * value * value
}

console.log(CubeVolume(5))

function WelcomeNewMembers(greeting){
    return greeting
}

console.log(WelcomeNewMembers("Welcome to the Family!"))

const greeting = (user)

let user = {
    name : "Princewill",
    age : "30",
    dateOfBirth : "05-04-1997",
    name : "chuza",
    age : "27",
    dateOfBirth : "05-04-1999"
    }

console.log(user)

console.log(1 === 90);

console.log(50 < 100);

console.log(24 <= 10);

const number = 25;
const value = 15;
const total = number === value;
console.log(total);

const number1 = 15;
const number2 = 12;
const greater = number1 > number2;
console.log(greater);

let data = {
apple : "green",
fruitShape : "circle",
apple : "red",
fruitShape : "sphere",
}
console.log(data);


const charging = true;
const notCharging = !charging;
console.log(notCharging);

// Javascript will treat it as a string value instead of number because one of the numbers has double quotes around it.
let answer  = "37" + 7;
console.log(answer);

// Here Javascript will treat it as a number value because both numbers are not in double quotes.
let answer1 = 37 + 7;
console.log(answer1);


const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees[2]);

var product = "apple"

console.log("output in console from index.js file")

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("John"));

function greet(name) {
    return "Hello,"  + name + "!";
}
console.log(greet("Emily"));

function greet(name) {
    return "Hello,"  + name + "!";
}
console.log(greet("Sarah"));

let student = {
    firstName : "John",
    lastName : "Doe"
};
if (student.firstName === "John") {
    console.log("Hello, John!");
} else {
    lastName : "Doe"
    console.log("Hello, Doe!");
}

let totalPrice = 100;
let discount = 20;

if (totalPrice > 105) {
    discount = 30;

}   else {
    discount = 10;
}
console.log("if total price is"  +  " > "  + 105); 
console.log("The discount is: " + "30");  

let firstName = "John";
let lastName = "Doe";

if (firstName === "John" && lastName === "Doe");