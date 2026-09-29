import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    

    const {prodID} = useParams()


    async function fetchData(){
    await fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        const pro=data.products.filter(p=>p.id == prodID)
        setProduct(pro[0])
      })
      .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

console.log(product)


  return (
    <>
        <h3>{product?.title}</h3>
        show multiple images 
        show actual price 
        and discount price 
        

        <div className="container">
            <div className="row">
                {
                    product?.reviews?.map((rev,i)=>(
                        <div className="col-12" key={i}>
                            <div className="card">
                                    <div className="card-body">
                                    <div>
                                        {[1,2,3,4,5].map(s=>(
                                            <IoMdStar 
                                             key={s}
                                             color={s <= rev.rating ? "gold" : "dark"}
                                            />
                                        ))}
                                    </div>
                                <div className="card-title">
                                    {rev.comment}
                                </div>
                                <span>{rev.reviewerName}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>

  )
}

export default ProductDetails