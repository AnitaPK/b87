import React, { useReducer } from 'react'

const initialState = {coin:0}

function coinReducer(state, action){
    switch (action.type){
        case "Increament":
            console.log("***********")
            return  {coin: state.coin + 1}
        case "Decreament":
            console.log(action.payload)
            return {coin: state.coin -1}
        default : 
        return state
    }
}
const CoinReducerGame = () => {
    const [state, dispatch] = useReducer(coinReducer, initialState)

    const handleDecreament = ()=>dispatch({type:"Decreament",payload:{Q:"React is very easy"}})
  return (
    <div style={{fontSize:"30px", textAlign:"center"}}>CoinReducerGame
        <p>Coin : {state.coin}</p>
        <button onClick={()=>dispatch({type:"Increament"})}>INCREAMENT</button>
        <button onClick={handleDecreament}>DECREAMENT</button>
    </div>
  )
}

export default CoinReducerGame