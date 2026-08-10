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

arr = [1,2,3,4,6, 4]

num = arr.find((v,i)=> v == 4)

console.log("****************", num)
isEvenAll=arr.every((v,i)=> v%2==0)
console.log(isEvenAll)
isSomeNumOdd = arr.some((v)=> v%2!=0)
console.log(isSomeNumOdd)


// arr.reduce((acc, v, i)=>{}, accumulator)
products = [{name:"IPhone", price:4, isAvailable:true},
    {name:"Laptop", price:400, isAvailable:true},
    {name:"TV", price:104, isAvailable:false},
    {name:"Laptop", price:9999400, isAvailable:false},

]
cart = [{name:"IPhone", price:4, quantity:2},
        {name:"Laptop",price:2, quantity:1}
        ]

totalAmount = 0

for(let i=0; i<cart.length;i++){
   totalAmount = totalAmount +(cart[i].price * cart[i].quantity)
//    totalAmount +=(cart[i].price * cart[i].quantity)
}

console.log(totalAmount)

tAmount = cart.reduce((totAmount,v) => totAmount += v.price*v.quantity, 0)
console.log(tAmount)
// forEach()

prod = products.find((p,i)=> p.name == "Laptop")
console.log(prod)