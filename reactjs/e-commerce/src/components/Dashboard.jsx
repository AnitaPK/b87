import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Products from './Products'

const Dashboard = () => {
  const [products,setProducts] = useState([])


  async function fetchData() {
    await fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => console.log(err))
}
useEffect(()=>{
  fetchData()
},[])
// console.log(products)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Products products={products}/>

      <Footer />
    </>
  )
}

export default Dashboard