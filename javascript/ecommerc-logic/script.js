const products = [
  {
    id: 1,
    title: "Laptop",
    category: "Electronics",
    price: 55000,
    stock: 10,
    rating: 4.8,
    brand: "Dell",
    createdAt: "2026-05-01"
  },
  {
    id: 2,
    title: "Mobile",
    category: "Electronics",
    price: 25000,
    stock: 5,
    rating: 4.5,
    brand: "Samsung",
    createdAt: "2026-05-10"
  },
  {
    id: 3,
    title: "Shoes",
    category: "Fashion",
    price: 3000,
    stock: 0,
    rating: 4.1,
    brand: "Nike",
    createdAt: "2026-04-20"
  },
  {
    id: 4,
    title: "Headphones",
    category: "Electronics",
    price: 2000,
    stock: 15,
    rating: 3.9,
    brand: "Boat",
    createdAt: "2026-05-15"
  },
  {
    id: 5,
    title: "Book",
    category: "Education",
    price: 500,
    stock: 20,
    rating: 4.7,
    brand: "Penguin",
    createdAt: "2026-05-05"
  }
];


function checkAfforExpen(){
    prodPrice = document.querySelector("#prodPrice").value
    if(prodPrice >= 1000){
        document.querySelector("#msgPriceCheck").textContent = "Expensive Product"
    }else{
        document.querySelector("#msgPriceCheck").textContent = "Affordable Product"

    }
}

document.querySelector("#productName").innerHTML = products.map((prod)=>`
    <li>${prod.title}</li>
`).join("")


function showHidePass(){
    passwordElmt = document.querySelector("#password")
    if(passwordElmt.type == "password"){
        passwordElmt.type = 'text'
    }else{
        passwordElmt.type = "password"
    }
}

function loginCheck(){
    email = "admin@gmail.com"
    password = "admin@123"

    emailInput = document.querySelector("#emailInput")
    passwordInput = document.querySelector("#password")

    if(emailInput.value.length > 0 && passwordInput.value.length > 0){
         if(emailInput.value == email){

        if(passwordElmt.value == password){
            document.querySelector("#loginMSG").textContent = "Login success"
        }else{
            document.querySelector("#loginMSG").textContent = "password Incorrect"
        }
    }else{
            document.querySelector("#loginMSG").textContent = "Email Incorrect"
    }
    }else{
            document.querySelector("#loginMSG").textContent = "please enter email and password"

    }
}