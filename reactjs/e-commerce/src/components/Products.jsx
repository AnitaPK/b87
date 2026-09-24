import React from 'react'
import Card from './Card'

const Products = ({ products, categories }) => {
    console.log(categories)

    // will write code for search and filter 
    //product detail page

    return (
        <>
            <div>
                <input type="text" />
                <button>Search</button>
                <select name="" id="">
                    <option value="">Select Category</option>
                    {categories?.map((c,i)=><option key={i}>{c}</option>)}
                </select>
            </div>
            <div className="container">
                <div className="row">
                    {
                        products.map((prod, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-3" >
                               <Card prod={prod}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products