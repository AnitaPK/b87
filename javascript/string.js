name1 = 'Wisdom'
name2 = "Sprouts!"
name = name1 + " " + name2
console.log(name)

str = `I like to learn 
Javascript`

console.log(name.length)
console.log(str.length)

console.log(name.charAt(0))
console.log(name[0])

// .toUpperCase() and .toLowerCase().
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// .concat()
str1 = "Hello"
str2 = "World"
msg = str1.concat(" ", str2, "!!!")
console.log(msg)



// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

indexNumber = name.indexOf("Wisdom")
console.log(indexNumber)

index1 = msg.indexOf("hello")
console.log(index1)         // returns -1 because not exists
index2 = msg.indexOf("Hello")
console.log(index1) 

console.log(msg.indexOf('o'))
console.log(msg.lastIndexOf('o'))

// returns boolean value true or false
console.log(msg.includes('Hello'))
console.log(msg.includes('iuytre'))

// returns boolean value true or false
console.log(msg.startsWith("Hello"))
console.log(msg.startsWith("hello"))

console.log(msg.endsWith('!!'))
console.log(msg.endsWith('World!!!'))

// .slice(), .substring(), .substr()

// first parameter index and second parameter is also index
substr = msg.slice(0, 4)
console.log(substr)

substr1 = msg.slice(1, 7)
console.log(substr1)
console.log("********** substring *********")
substr3 = msg.substring(0,4)
console.log(substr3)
substr4 = msg.substring(1,7)
console.log(substr4)

console.log("********** substr *********")
substr5 = msg.substr(0,4)
console.log(substr5)
substr6 = msg.substr(1,7)
console.log(substr6)

substr7 = msg.substr(5)
console.log(substr7)
substr8 = msg.substring(5)
console.log(substr8)
substr9 = msg.slice(5)
console.log(substr9)

// .trim(), .trimStart(), .trimEnd()

msg1 = "       Hello              "
console.log(msg1.length)
console.log(msg1.trim().length)
console.log(msg1.trimStart().length)
console.log(msg1.trimEnd().length)

// .replace() and .replaceAll().

str10  =  str.replace('like', 'love')
console.log(str10)
console.log(str)
msg3 = "It's okay if you dont like computer programming. It's smart people thing anyway"
msg4 = msg3.replaceAll("It's", "Its")
console.log(msg4)


// .split()
fruitsString = 'Apple Banana Mango'
fruitArray = fruitsString.split(' ')
console.log(fruitArray)
console.log(typeof(fruitArray))