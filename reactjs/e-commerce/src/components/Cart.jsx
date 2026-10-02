import React, { useEffect, useReducer, useState } from 'react'
import { cartReducer, initialState } from '../cart/cartReducer'

const Cart = ({state,dispatch}) => {
    // const [state, dispatch] = useReducer(cartReducer, initialState)
    const [cartProd, setcartProd] = useState()


    function fetchData (){
        setcartProd(state)
    }

    useEffect(()=>{
        fetchData()
    },[state])
    console.log(state)
  return (
    <>
    <div>Cart</div>
    {cartProd?.cart.cartLength}
    {
        cartProd?.cart.map((p,i)=>(
                <div key={i}>
                    <p>{p.title} 
                        <button onClick={()=>dispatch({
                            type:"DecreaseQuantity", 
                            payload:{prodID:p.prodID}
                        })}>-</button>
                        {p.quantity}
                        <button onClick={()=>dispatch({
                            type:"IncreaseQuantity", 
                            payload:{prodID:p.prodID}
                        })}
                        >+</button>
                        <span>{p.price}</span>
                        <button onClick={()=>{dispatch({type:"RemoveFromCart",
                        payload:{prodID:p.prodID}})}}>Remove from Cart</button>
                        </p>

                </div>
        ))
    }
    <div>Total Price : {cartProd?.totalAmount}</div>
    </>
  )
}

export default Cart
