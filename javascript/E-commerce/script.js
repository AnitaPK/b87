const NameInputElmt = document.querySelector("#NameInput")
const descriptionInputElmt = document.querySelector("#descriptionInput")
const priceInputElmt = document.querySelector("#priceInput")
const imagePathInputElmt = document.querySelector("#imagePathInput")
const addNewBtnElmt = document.querySelector("#addNewBtn")
const renderProductsElmt = document.querySelector("#renderProducts")
const renderCartElmt = document.querySelector("#renderCart")
const amtDetailsElmt = document.querySelector("#amtDetails")
const priceDisInputElmt = document.querySelector("#priceDisInput")

const products = []
const cart = []

function getProductsFromLocal() {
    return JSON.parse(localStorage.getItem("b87Products"))
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("b87Cart"))
}

function saveToLocalProducts(p = products) {
    localStorage.setItem("b87Products", JSON.stringify(p))
}
function saveToLocalCart(c) {
    localStorage.setItem("b87Cart", JSON.stringify(c))
}

function addNewProduct() {
    const newProduct = {
        id: Date.now(),
        name: NameInputElmt.value,
        description: descriptionInputElmt.value,
        price: Number(priceInputElmt.value),
        imgPath: imagePathInputElmt.value,
        discount:Number(priceDisInputElmt.value)
    }
    const prodFromLocal = getProductsFromLocal()
    prodFromLocal.push(newProduct)
    saveToLocalProducts(prodFromLocal)
    NameInputElmt.value = ''
    descriptionInputElmt.value = ''
    priceInputElmt.value = ''
    imagePathInputElmt.value = ''
    // renderProducts()
}

if(addNewBtnElmt){
addNewBtnElmt.addEventListener("click", addNewProduct)
}
function renderProducts() {
    if(!renderProductsElmt){
        return
    }
    const prodFromLocal = getProductsFromLocal()

    renderProductsElmt.innerHTML = prodFromLocal.map((prod,i) => `
    
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card" style="width: 16rem;">
                                    <img src=${prod.imgPath} class="card-img-top customImgCard" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${prod.name}</h5>
                                        <p class="card-text">${prod.description}</p>
                                        show Original Price and Price after Discount
                                        <button class="btn btn-primary" onclick="addToCart(${prod.id})">Add To Cart</a>
                                    </div>
                                    </div>
                                
                                </div>
    `).join("")
}

function addToCart(ID){
    const prodFromLocal = getProductsFromLocal()
    const cartFromLocal = getCartFromLocal()


    index = prodFromLocal.findIndex((p)=> p.id == ID)
    if(index == -1){
        alert("Product not available")
    }

    existingProdInCartIndex = cartFromLocal.findIndex(p=>p.prodID == ID)
    if(existingProdInCartIndex != -1){
        cartFromLocal[existingProdInCartIndex].quantity += 1 
        saveToLocalCart(cartFromLocal)
    }else{
    console.log(existingProdInCartIndex)
    
    const prodForCart = prodFromLocal.find(p=> p.id == ID)
    prod = {
        id:Date.now(),
        prodID:prodForCart.id,
        name:prodForCart.name,
        price:prodForCart.price,
        discount:prodForCart.discount,
        quantity:1
    }
    cartFromLocal.push(prod)
    saveToLocalCart(cartFromLocal)
    document.querySelector("#cartLength").textContent = cartFromLocal.length

}
}

function renderCart(){
    let cartFromLocal = getCartFromLocal()
    const isallAvailableProds = cartFromLocal.every((p)=>p.quantity > 0)
    if(!isallAvailableProds){
        cartFromLocal = cartFromLocal.filter((p)=> p.quantity >0)

    }
    renderCartElmt.innerHTML = cartFromLocal.map((p,i)=>`
                        <tr>
        <th scope="row">${i+1}</th>
        <td>${p.name}</td>
        <td>
        Original Price<del>${p.price}</del>
        <span>${p.price - (p.price*p.discount/100).toFixed(2)}</span>
        </td>

      <td>
        <button class="btn btn-secondary" onclick="decreamentProdQuantity(${p.id})">-</button>
        <span>${p.quantity}</span>
        <button class="btn btn-secondary" onclick="increamentProdQuantity(${p.id})">+</button>

      </td>
    </tr>
    `).join("")

    TotalAmount = cartFromLocal.reduce((tAmt, p,i)=>{
        return tAmt += ((p.price-(p.price *p.discount /100))*p.quantity)
    },0)
    let deliveryCharges = 30
    let handlingCharges = 50
    cartAMT=0
    if(cartFromLocal.length > 0){
        if(TotalAmount < 1000){
            cartAMT = TotalAmount+deliveryCharges + handlingCharges
        }else{
            deliveryCharges=0; handlingCharges=0
            cartAMT = TotalAmount+deliveryCharges + handlingCharges
        }
     amtDetailsElmt.innerHTML = `
                        <p>TotalAmount &#8377 <i>${TotalAmount.toFixed(2)}</i></p>
                        <p>Delivery Charges &#8377 <i>${deliveryCharges}</i></p>
                        <p>Handling Charges &#8377 <i>${handlingCharges}</i></p>
                        <p>Cart Amount &#8377 <i>${cartAMT.toFixed(2)}</i><p>

    `
    }else{
    amtDetailsElmt.innerHTML = `
                        <h1>Your Cart is EMPTY</h1>

    `}
}
function decreamentProdQuantity(ID){
    console.log(ID)
    const cartFromLocal = getCartFromLocal()
    const index = cartFromLocal.findIndex(p=>p.id == ID)
    if(cartFromLocal[index].quantity > 1){
    cartFromLocal[index].quantity--
    saveToLocalCart(cartFromLocal)
    renderCart()
    }else{
    cartFromLocal.splice(index,1)
    saveToLocalCart(cartFromLocal)
    renderCart()
    }

}


function increamentProdQuantity(ID){
    const cartFromLocal = getCartFromLocal()
 const index = cartFromLocal.findIndex(p=>p.id == ID)
    cartFromLocal[index].quantity++
    saveToLocalCart(cartFromLocal)
    renderCart()
}






likes = [{
    id:1,prodID:12345678456
}]

// show likes count in navbar 


// on card of product aadd one button for like 

// write function for add product like in likes array

window.addEventListener("load", () => {
    prodFromLocal = getProductsFromLocal()
    cartFromLocal = getCartFromLocal()
    console.log(prodFromLocal, cartFromLocal)
    if (!prodFromLocal) {
        saveToLocalProducts()
    }
    if(!cartFromLocal){
        saveToLocalCart(cart)
    }
    document.querySelector("#cartLength").textContent = cartFromLocal.length
    if(renderProductsElmt){
    renderProducts()
    }
    if(renderCartElmt){
        renderCart()
    }
})

// is coding still the most important skill for an IT career?