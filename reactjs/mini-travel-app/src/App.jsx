import { useState } from 'react'
import './App.css'
import data from './data.js'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="containerDiv">
    {
      data.map((city,i)=>(
        <Card city={city} />
      ))
    }
</div>
     </>
  )
}

export default App
