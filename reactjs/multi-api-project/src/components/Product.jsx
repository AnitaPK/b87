import React from 'react'
import useProducts from '../customHook/useProducts'
import Loading from './Loading'


const Product = () => {
    const {loading, error, products} = useProducts('https://fakestoreapi.com/products')
  
    if (loading) return <Loading />
    if(error) return<Error /> 
    return (
        <>
        {products?.map((p)=>(
            <img key={p.id} src={p.image} alt={p.title} style={{height:"50px",width:"50px"}}/>
        ))}
        </>
  )
}

export default Product