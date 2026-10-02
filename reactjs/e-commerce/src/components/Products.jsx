import React, { useEffect, useState } from 'react'
import Card from './Card'

const Products = ({ products, categories , dispatch}) => {
    // console.log(categories)
    const [searchTitle, setSearchTitle] = useState('')
    const [filteredProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState('')

    // will write code for search and filter 
    function handleSearch(e){
        const v = e.target.value
        setSearchTitle(v)
        console.log(searchTitle)
        const fitProd=products.filter((p)=>{
            const prodByTitle = p.title.toLowerCase().includes(v.toLowerCase())
            const prodByCat =  category === '' || p.category == category
            return prodByTitle && prodByCat
    })
        setFilterProducts(fitProd)
    }


    function hadleFilterCategory(e){
        const cat = e.target.value 

        setCategory(cat)
        const fitProd=products.filter((p)=>{

            const prodByTitle = p.title.toLowerCase().includes(searchTitle.toLowerCase())
            const prodByCat = cat === '' || p.category == cat
            return prodByTitle && prodByCat
        })
        setFilterProducts(fitProd)

    }

    useEffect(() => {
    console.log(searchTitle);
}, [searchTitle]);

    useEffect(()=>{
        setFilterProducts(products)
    },[products])
    //product detail page

    console.log(category)
    return (
        <>
            <div>
                <input type="text"
                // value={searchTitle}
                onChange={handleSearch}/>
                <select name="" id=""  onChange={hadleFilterCategory}>
                    <option value="">Select Category</option>
                    {categories?.map((c,i)=><option key={i} value={c}>{c}</option>)}
                </select>
            </div>
            <div className="container">
                <div className="row">
                    {filteredProducts.length > 0 ? <>
                    {
                        filteredProducts.map((prod, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-3" >
                               <Card prod={prod} dispatch={dispatch}/>
                            </div>
                        ))
                    }
                    </> : <p>No product found</p>}
                    
                </div>
            </div>
        </>
    )
}

export default Products