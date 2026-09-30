import React, { useReducer } from 'react'
import { coinReducer, initialState } from '../coinReducer'

const GameCoinCollector = () => {
    const [state, dispatch] = useReducer(coinReducer, initialState)

    const handleNextStage = () =>{
        if(state.coin >=50){
            dispatch({type:"nextStage"})
        }else{
            alert("coin should be greate than 50")
        }
    }

  return (
    <>
    <div>GameCoinCollector</div>
    <h2>Stage : {state.stage}</h2>
    <h1>Coin : {state.coin}</h1>
    <button onClick={()=>dispatch({type:"Collect5Coins"})}>Get 5 Coins</button>
    <button onClick={()=>dispatch({type:"Lose3Coins"})}>Lose 3 Coins</button>
    <button onClick={()=>dispatch({type:"Jackpot"})}>Jackpot</button>
    <button onClick={handleNextStage} disabled ={state.coin<50}>Next Stage</button>
    
</>
  )
}

export default GameCoinCollector