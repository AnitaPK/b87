// foreach(), map(), filter(), find(), reduce(), some(), every(), sort(), concat(), slice(), splice(), indexOf()


fruits = ['Apple','Banana','Mango','Orange']
numArray = [3,6,5,2,8,9,7]

// for(i=0, i<arrName.length; i++){}
// for (elmt of in arrName){}
// for(ind in arrName){}

const funName = () =>{}   //arrow function 

fruits.forEach((fruit, i)=>{console.log(fruit)
    console.log(i)
})
console.log("------------------")

numArray.forEach((num)=>{
    console.log(num**2)
})

for(let i=0; i<numArray.length;i++){
    console.log(numArray[i] ** 2)
}

fruits.map((fruit)=>{
console.log("I like to Eat", fruit)
})

evenNum = []
oddNum = []
for(let i=0; i<numArray.length;i++){
    if(numArray[i] % 2 == 0){
        console.log(numArray[i])
        evenNum.push(numArray[i])
    }else{
        oddNum.push(numArray[i])
    }
}

evenNumberArr = numArray.filter((num)=> num %2 == 0)
console.log("evenNumberArr",evenNumberArr)
oddNumberArr = numArray.filter((num)=> num % 2 != 0)
console.log("oddNumberArr",oddNumberArr)

mulOfThree = numArray.filter(num => num % 3 == 0)
console.log(mulOfThree,"mulOfThree")

const apple = fruits.find(elmt => elmt == "apple")
console.log(apple)

sumOfElmt = 0
for(let i=0; i<numArray.length;i++){
    // sumOfElmt = sumOfElmt+numArray[i]
    sumOfElmt +=numArray[i]
}
console.log("sumOfElmt", sumOfElmt)

const sumOfNumFromReduce = numArray.reduce((sumOfNumbers,num)=> {
    return sumOfNumbers + num
}, 0)

console.log("sumOfNumFromReduce",sumOfNumFromReduce)
console.log("**********************")
const res =numArray.some((n)=> n%2 == 0)
console.log(res)
console.log("**********************")

const res1 = numArray.every(n=> n%2 == 0)
console.log(res1)

console.log(fruits.sort())
console.log(numArray.sort())

arr1 = [9,8,3]
arr2 = [11, 53,2]

const sortedArr = arr1.concat(arr2)
console.log(sortedArr.sort((a,b)=> a-b))