//             var.   let.    const 
// redefine    Y.      N       N
// reassign.   Y      Y       N
// blcok scope N.     Y.     Y
//function scope Y.   N.     N

var a = 1
a = {}
var a = "Rahul"

let x = 1
 x = 'Rahul'

const y = {}
y.name = "Rahul"

// { }. => if for forEach map filter 
z = 99
{
    let z = 100 
    console.log(z)
}
console.log(z)
let msg = "Welcome"
function greet(){
    msg = "Hello"
    console.log(msg,"In function")
}
greet()

console.log(msg,"Out function")
`${msg}`

// [] 
// forEach map , filter ,find some every findIndex reduce indexOf includes 
// reverse sort slice splice   join
// length 
// split toLowerCase toUpperCase slice chatAt subString substr trim replace replaceAll
// concat startWith endsWith 

// pop push shift unshift 

// data.products 


// imgsProduct = product.images 
// payload = {email:"admin@gmail.com",password:"pas123"} 


// {email,password}=req.body  


// req.body.email  =>  email
// req.body.password => password
// spreadOPerator  

// students = []
// [...studets]
// student = {name:"Rahul",email:"rahul@gmail.com",password:"pas123"}
// student.subject = "Math"
// {...student, {subject:"Math"}}
// {...student, {password:"Rahul123"}}



// import  {add, sub,multi,div} from Math.js
// calculator.js 
// add(n1, n2 )

// export 

// Math.js add sub multi div 