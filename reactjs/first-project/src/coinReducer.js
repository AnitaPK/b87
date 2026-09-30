export const initialState = {stage:1,coin:10}

export function coinReducer(state, action){
    switch (action.type){
        case "Collect5Coins":
            return {coin : state.coin + 5, stage:state.stage}
        case "Lose3Coins":
            return {coin : state.coin -3,stage:state.stage}
        case "Jackpot":
            return {coin : state.coin + 40, stage:state.stage}
        case "nextStage":
            return {coin: state.coin - 50 , stage:state.stage +1}
        default :
            return state
    }
}




// state coin : 10 
//     functions 
//         collect5Coins 
//         lose3Coins 
//         jackpot 40
//         goToNext coin should be greate than 50