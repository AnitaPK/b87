// function progOne(){
//     console.log("1111 First Programe send data for register")
// }

// function progTwo(){
//     console.log("2222 Second Programe check and validate")
// }

// function progThree(){
//     console.log("3333 Third Programe success")
// }

// progOne()
// setTimeout(progTwo, 3000)
// progThree()

// // synchronous Programming language 
// // Asynchronous Programming language

// function displayData(studentList){
//     console.log(studentList)
// }

// function fetchData(cb){
//     setTimeout(()=>{
//         const data =  [{name:"Rahul", age:20}, 
//                         {name:"Onkar",age:21}];
//         cb(data)
//     }, 2000);
// }

// fetchData(displayData)

console.log("start line")
for(i=0;i<=10;i++){
    console.log(i)
}
console.log("End line")

console.log("Start line1111")
setTimeout(()=>{
    for(i=0;i<=10;i++){
        console.log(i)
}
}, 1000)
console.log("End line 11111")