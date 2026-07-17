let totalAmount = 90

if(totalAmount > 100){
    dis = totalAmount * (10/100)
    totalAmount = totalAmount - dis
}

console.log(totalAmount)

// factorial 

let number = 5
let factorialValue = 1

// 5 * 4 * 3 * 2 * 1

for(i=1; i<=number;i++){
    factorialValue = factorialValue * i;
    console.log(i, factorialValue)
}
console.log("factorial of ", number, " is ", factorialValue)
// no     i.     factorialValue     result(factorialValue *i)
// 1.     1       1                1 * 1 = 1
// 2.     2.      1                1 *  2 = 2
// 3.     3.      2                2 * 3  =6
// 4.     4.      6.               6 * 4 = 24
// 5      5       24               24 * 5 = 120
// 6.     6 



// print even numbers from 1 to 20 

for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// sum of digit 

num1 = 51234
sumDigit = 0
while(num1 > 0){
    digit = num1 % 10    //1234 % 10 = 4
    console.log(digit,"digit")
    sumDigit = sumDigit + digit
    console.log(sumDigit,"sumDigit")
    num1 = Math.floor(num1 / 10)
    console.log(num1,"num1")
}


// Math.floor , Math.ceil, Math.round 
// no.  num1    digit.        sumDigit.    result(sumDigit + digit)
// 1st   1234   4(num%10)    0            0 + 4 = 4  