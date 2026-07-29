stud1 = 'Rahul'
stud2 = 'Onkar'
stud3 = 'Sourabh'

students = []

console.log(typeof (students))  // object


fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Papaya']

console.log(fruits[0])    // 'Apple'
console.log(fruits[1])    //'Banana'

console.log(fruits)
fruits.push("Cherry")     //at last index
console.log(fruits)

// fruits[9] = 'Mango'
// console.log(fruits)


fruits.unshift("Mango")   // 0th index
console.log(fruits)



fruits.pop()    // last index element
console.log(fruits)

fruits.shift()
console.log(fruits)  //remove oth index element

console.log("--------------------")
// slice splice 
subFruits = fruits.slice(2, 4)    // returns new array
console.log(subFruits)


console.log(fruits)

fruits.splice(1, 0, "Kiwi", "Guava")
console.log(fruits)

fruits.splice(4, 1)
console.log(fruits)


// push, pop, unshift, shift , splice, splice 

// indexOf, includes

indexNumber = fruits.indexOf('Kiwi')
console.log(indexNumber)


indexN = fruits.indexOf("Orange")
console.log(indexN)

console.log(fruits.includes("Kiwi"))

if (!fruits.includes("Orange")) {
    console.log("Fruit not found")
} else {
    console.log("Add to cart")
}

// for()

len = fruits.length
for (i = 0; i < len; i++) {
    console.log(fruits[i])
}
fruits[len]

console.log("--------------------")

// for of    for in

for (val of fruits) {
    console.log(val)
}
console.log("--------------------")

for (ind in fruits) {
    console.log(ind)
    console.log(fruits[ind])
}

// callback = function as a parameter 

// Create a program to reverse an array manually.

const revFruits = []
for (i = len - 1; i >= 0; i--) {
    revFruits.push(fruits[i])
}
console.log("Fruits array", fruits)
console.log("Reverse fruits array ", revFruits)

// Write a program to find the second-largest number in an array.

numArray = [84, 4, 8, 21, 41, 34]
let largestNum = 0
let smallestNum = Infinity

let secondLargest //sort second place. // every ite largets and secondLargest

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > largestNum) {
        largestNum = numArray[i]
    }
}
console.log(largestNum, "Largest Number")
// ite. i   largestNum.   numArray[i]            result / condition 
// 1.   0.     0           numArray[0] =>84      84>0 largestNum = 84
// 2.   1      84          numArray[1] =>4      4>84
// 3.   2.     84          numArray[2] =>8.      8>84
// 4.   3.     84          numArray[3] => 21      21>84
// 5.   4.     84          numArray[4] => 41      41>84
// 6    5      84          numArray[5] => 34      34>84 
// 7.   6     

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < smallestNum) {
        smallestNum = numArray[i]
    }
}
console.log(smallestNum, "Smallest number")

let fLargest = -Infinity
let sLargest = -Infinity

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > fLargest) {
        sLargest = fLargest
        fLargest = numArray[i]
    } else if (numArray[i] != fLargest && numArray[i] > sLargest) {
        sLargest = numArray[i]
    }
}

console.log(sLargest, "Second Largest")

function findSecondLargest(array) {
    if (array.length > 2) {
        console.log("Array should contain greater than two elements")
    }
    for (n of array) {
        if (n > fLargest) {
            sLargest = fLargest
            fLargest = n
        } else if (n != fLargest && n > sLargest) {
            sLargest = n
        }
    }
    console.log(sLargest, "Second Largest number")
}
// numArray[i]>sLargest numArray[i] !=fLargest
// sLargest = numArray[i]
// ite    i.   fLargest        sLargest        numArray[i]            result 
// 1      0     -Infinity.      -Infinity       numArray[0] =>84    fLargest =84; sLargest = -Infinity 
// 2.     1.    84             -Infinity        numArray[1] => 4.   4!=84.&& 4 > -Infinity sLargest=4
// 3      2     84               4              numArray[2] => 8    8!=84 && 8>4.  sLargest = 8
// 4.     3.    84               8              numArray[3] =>21    21!=84 && 21>8 sLargest =21
// 5.     4.    84              21              numArray[4] =>41.   41!=84 && 41>21 sLargest = 41
// 6.     5.    84              41              numArray[5] =>34.   34 !=84 && 34>41 


// Create a function to merge two arrays without duplicates.
array1  = [13, 2, 4, 6, 2, 4, 7, 9, 6]
uniqueArray = new Set(array1)
console.log(array1)
console.log(uniqueArray)

arr1 = [11, 43, 99, 75]
arr2 = [23, 11, 95, 43]

resultArr = [11, 43, 99, 75, 23, 95]
// for. includes , push 

// Write a program to find the frequency of each element in an array.

// 13 : 1      2 : 2        4 : 2    6 : 2.  7 : 1.  9 :1 

