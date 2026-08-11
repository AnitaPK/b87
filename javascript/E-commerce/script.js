const NameInputElmt = document.querySelector("#NameInput")
const descriptionInputElmt = document.querySelector("#descriptionInput")
const priceInputElmt = document.querySelector("#priceInput")
const imagePathInputElmt = document.querySelector("#imagePathInput")
const addNewBtnElmt = document.querySelector("#addNewBtn")
const renderProductsElmt = document.querySelector("#renderProducts")

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

function addNewProducst() {
    const newProduct = {
        id: Date.now(),
        name: NameInputElmt.value,
        description: descriptionInputElmt.value,
        price: Number(priceInputElmt.value),
        imgPath: imagePathInputElmt.value
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
addNewBtnElmt.addEventListener("click", addNewProducst)
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
                                        <button class="btn btn-primary">Add To Cart</a>
                                    </div>
                                    </div>
                                
                                </div>
    `).join("")
}
window.addEventListener("load", () => {
    prodFromLocal = getProductsFromLocal()
    cartFromLocal = getCartFromLocal()
    console.log(prodFromLocal, cartFromLocal)
    if (!prodFromLocal && !cartFromLocal) {
        saveToLocalProducts()
        saveToLocalCart(cart)
    }
    if(renderProductsElmt){
    renderProducts()
    }
})