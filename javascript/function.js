// simple function 
function greet(){
    console.log("Hello World")
}
greet()

// simple function with parameter
function greetUser(name, age){
    console.log("Hello ", name ,"!!!!!", "Your age is", age)
}
greetUser("Onkar", 20) // onkar and 20 arguments

function add(a, b){
    return a+b
}

add2And5 = add(20,5)
console.log(add2And5)

function greet1(){
    return "Hello World"
}

str = greet1()
console.log(str)

// function(){}  anonymous function 
// function(name){}

// ()=>{}       anonymous arrow function 

greet2 = ()=>console.log("Hello from arrow function")  //arrow function

addition = (x,y) => x+y // arrow function return addition of two numbers

addition1 = (x,y)=>{
    add = x+y 
    return add
}

// self invoked anonymous function 
(function(){})()
// (()=>{})()

// callback function

// function as a parameter  = callback function

function calculation(x,y,add){
    addtionOfTwoNums = add(x,y)
    console.log(addtionOfTwoNums)
    return addtionOfTwoNums
}

calculation(10,20,addition1)


//1.  Write a function to create multiplication table of a number 

function multiplicationTable(num){
    for(i=1; i<=10;i++){
        console.log(num , "* ", i , " = ", num*i)
    }
}

multiplicationTable(13)
multiplicationTable(27)

//  Functions for Basic Calculations

// Add two numbers
function add(a, b) {
  return a + b;
}

// Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a / b;
}

// Invoking the functions
console.log("Addition:", add(10, 5));      // Output: 15
console.log("Subtraction:", subtract(10, 5)); // Output: 5
console.log("Multiplication:", multiply(10, 5)); // Output: 50
console.log("Division:", divide(10, 5));     // Output: 2

// create a function to find factorial of a number 

// factorial 

let factorialValue = 1

function factorial(number){
    for(i=1; i<=number;i++){
        factorialValue = factorialValue * i;
        console.log(i, factorialValue)
    }
}
factorial(7)

// create a function to calculate fibbonacci of a number 

//    0 1 1 2 3 5 8 13 21 34 55 ...
//    1 2 3 4 5 6 7 8  9 10 
// 100 

function fibonacci(ite){
    n1 = 0;
    n2 = 1;
    console.log(n1, n2)
    for(i=3; i<=ite; i++){
        temp = n2
        n2 = n1+n2
        n1 = temp
        console.log(n1, n2)
    }
}

// ite count     i     n1     n2.   temp       result
// 1             1     0      1      1       n2 = n1+n2 = 0+1 = 1
// 2.            2.    1      1.     1.      n2 = 1+1 = 2
// 3             3.    1.     2.     2.      n2 = 3


fibonacci(10)