import React from 'react'
import { useDispatch } from 'react-redux'
import { increament, decreament } from '../redux/counterSlice'

const Button = () => {
    const dispatch = useDispatch()
  return (
<>
<button onClick={()=>dispatch(increament())}>INCREAMENT</button>
<button onClick={()=>dispatch(decreament())}>DECREAMENT</button>
</>
)
}

export default Button