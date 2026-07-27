stud1 = 'Rahul'
stud2 = 'Onkar'
stud3 = 'Sourabh'


students = []

console.log(typeof(students))  // object


fruits = ['Apple','Banana', 'Orange','Grapes', 'Papaya']

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
subFruits = fruits.slice(2,4)    // returns new array
console.log(subFruits)


console.log(fruits)

fruits.splice(1, 0, "Kiwi","Guava")
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

if(!fruits.includes("Orange")){
    console.log("Fruit not found")
}else{
    console.log("Add to cart")
}

// for()

len = fruits.length
for(i=0; i<len; i++){
   console.log(fruits[i])
}
fruits[len]

console.log("--------------------")

// for of    for in

for(val of fruits){
    console.log(val)
}
console.log("--------------------")

for(ind in fruits){
    console.log(ind)
    console.log(fruits[ind])
}

// callback = function as a parameter 