import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
  return (
    <h1>Count :{count} </h1>
  )
}

export default Counter