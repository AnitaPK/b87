import React, { useEffect, useState } from 'react'

const useProducts = (initailURL) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])


    async function fetchData(){
        try {
            const res = await fetch(initailURL)
            const data = await res.json()      
            setProducts(data)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[initailURL])

  return {
    loading, error, products
  }
}

export default useProducts