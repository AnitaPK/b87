async function fetchData() {
    await fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => redenderProducts(data.products))
        .catch(err => console.log(err))
}

function redenderProducts(products) {
    document.querySelector("#prods").innerHTML = products.map((product) => `
                        <div class="col">
                        <div class="card" style="width: 18rem;">
  <img src=${product.thumbnail} class="card-img-top" alt=${product.title}>
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description.slice(0,55)+'...'}</p>
    <div>${product.tags.map((t)=>`
        <span class="badge text-bg-warning">${t}</span>
        `).join("")}</div>
    <p>Price:$ ${product.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                        </div>
    `).join("")
}

fetchData()