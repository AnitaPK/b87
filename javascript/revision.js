// what is variable? 

name = 'Onkar'
age = 20
isAdmin = true 
// null 
// undefined 

emps = ["Rahul", "Pooja", "Riya"]

// String, Number, null, undefined , object, bigInt , symbol 

// assignment operator  
// = ,  ++, -- , +=, -=, /= , * =, %= 

// x = x+5  x+=5

// comparision operator 

x == y 

name == "Onkar" 

age === '20'     // false

// > , < ,>=, <= 

// arithmetic operators  

// +, - ,* ,/ ,%, **

a = x+y


// logical opearators 

// && ,  ||  ,  ! 

if(!isAdmin){
    console.log("You are not admin")
}


// if else 

// else if           ladder add 

// nested if 

// switch case 

let action    //.  'addToCart'.   'BuyNow'    'AddToFavorite'

switch (action){
    case 'addToCart':
        console.log("Process for add to cart")
    case 'BuyNow':
        console.log("Buy now procee")
    case 'AddToFavorite':
        console.log("added to favorite")
    default:
        console.log("No change")
}
var name = 'Onkar'
var name = 'Rahul'

let student 

function result(){
    student
}
for(let i=0; i<9;i++){



}
// console.log(i)

//                  var.         let.     const 
// define.          Yes.         No.      NO 
// declare          Yes.         Yes.     yes
// function scope   yes          no       no 
// block scope.     no           Yes.     Yes


// loops 

// for(), while(), do{} while()

// string  

// ''.   ""    ``

// typeof()

str.length 

str.charAt(indexNumber)

str.toLowerCase()
str.toUpperCase()
str.include('a')  //return boolean value
// contact() , + 
// slice() , substring(), substr() 

arr = []
// typeOf  => object 
// arr1 = new Array()

// for().  for in.  for of 

// slice(), splice()
// forEach() , map(), filter(), reduce(), some(), every(), find()


num1 = [3, 21, 54, 76, 15, 8]

evenNumber = num1.filter((n, i)=>{
    return n % 2 == 0
})

totalSum = num1.reduce((tSum, n)=>{
    tSum += n
},0)

