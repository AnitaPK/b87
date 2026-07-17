age = 20


if(age > 18){
    console.log("You can get Driving license")
}else{
    console.log("Wait till 18 years old")
}


marks = -10

// fail less than 35
// pass greater than and equals 35
// pass with second Class greater than 60
// pass with first class 75

if(marks >=0 && marks <=100){
    if(marks < 35){
        console.log("FAIL")
    }else if(marks >= 35   &&  marks<60){
        console.log("PASS")
    }else if(marks >=60 && marks <75){
        console.log("pass with second Class")
    }else{
        console.log("pass with first class")
    }
}else{
    console.log("Invalid Marks")
}


// if,if else,  else if, nested if 

today = new Date()
console.log(today.getDay())

// const day = today.getDay()
day = 10
month = today.getMonth()
year = today.getYear()
console.log(day,month,year)
// 0 , 1, 2, 3,4 ,5 ,6 
switch(day){
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday Working Day")
        break

    case 2:
        console.log("Tuesday Working Day")
        break

    case 3:
        console.log("Wednessday Working Day")
        break

    case 4:
        console.log("Thursday Working Day")
        break

    case 5:
        console.log("Friday Working Day")
        break

    case 6:
        console.log("Saturday HoliDay")
        break
    default:
        console.log("Invalid day")

}   

for(let i = 1; i <=10 ; i++){
    // console.log(i)
    // console.log("2 * ",i," = ", 2*i)
    console.log(`2 * ${i} = ${2*i}`)
}
// console.log("outside the for",i)
//          i       2          result(2*i)
// 1st ite  1       2          2*1     = 2
// 2nd ite  2.      2          2*2.    = 4
// 3rd ite  3       2          2*3.    = 6
// 4th ite. 4.      2.         2*4.    = 8
// 5th ite. 5.      2.         2*5.    = 10
// 6th ite. 6.      2.         2*6.    =12
// 7th.     7.      2.         2*7.    =14
// 8th.     8.      2          2*8     =16
// 9th.     9.      2.         2*9     =18
// 10th.    10.     2.         2*10.   =20
// 11th.    11

i = 150
while(i <111){
    console.log(`2 * ${i} = ${2*i}`)
    // increament /decreamnt
    i++
}
console.log("**************************")

do{
    console.log(`2 * ${i} = ${2*i}`)

}while(i<111)