import {BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Product"
import Receipes from "./components/Receipes"
import Fruits from "./components/Fruits"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Product />}></Route>
      <Route path="/rec" element={<Receipes />}></Route>
      <Route path="/fru" element={<Fruits />}></Route>

    </Routes>

    </BrowserRouter>
     </>
  )
}

export default App
