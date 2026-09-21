import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(50)
    function handleIncreament(){
        setCount((state)=>state = state+1)
    }
    function handleReset(){
        setCount(50)
    }

    // 1. create decreament function for count 
    // 2. create function for update increament by 5
    // 2. create function for update decreament by 5

    let countVariable = 0

    function countIncre(){
        countVariable++
        console.log(countVariable)
    }
  return (

    <>
    <h3>Counter : {countVariable}</h3>
    <button onClick={()=>countIncre()}>Increament of variable</button>
    <hr />

    <h3>Count : {count}</h3>
    <button onClick={()=>setCount(count+1)}>INCREAMENT</button>
    <button onClick={handleIncreament}>Increament By Funtion</button>
    <button onClick={()=>setCount(50)}>Reset</button>
    <button onClick={()=>handleReset()}>Rest By Function</button>
    </>
  )
}

export default Counter