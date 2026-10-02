// cartReducer.js 
export const initialState = {
    cart:[],
    cartLength:0,
    totalAmount:0
 }
// {prodID:1, title:'', price:23,discountPercentage:5,quantity:1}
 export function cartReducer(state, action){
    switch (action.type){
        case "AddToCart":
                console.log(action.payload) 

                let isPresentIndex = state.cart.findIndex((p)=>p.prodID == action.payload.prodID)
                let updatedCArt
                if(isPresentIndex == -1){
                // state.cart.push(action.payload)
                const prodWithQuantity = {...action.payload,quantity:1}
                console.log(prodWithQuantity)
                 updatedCArt = [...state.cart, prodWithQuantity]
                // state.cartLength = state.cart.length 
                console.log(updatedCArt)
                const totalAmount1 = updatedCArt.reduce((ta,p)=>{
                    let discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)
                    console.log(discountedPrice,"In reduce")
                    return ta + (discountedPrice * p.quantity)
                },0)
                console.log(totalAmount1)
                // console.log(state)
                return {...state, 
                    cart:updatedCArt, 
                    cartLength:updatedCArt.length,
                    totalAmount:totalAmount1.toFixed(2)
                    }
                }else{

                updatedCArt = state.cart.map((p, index) => {
                    if (index === isPresentIndex) {
                        return { ...p, quantity: p.quantity + 1}
                    }
                return p
                })
                const totalAmount1 = state.cart.reduce((ta,p)=>{
                    const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)
                },0)
                return { 
                    cart:updatedCArt, 
                    cartLength:updatedCart.length,
                    totalAmount:totalAmount1
                    }
                }
        case "RemoveFromCart":
            // action.payload
            const  isPresentIndex1 = state?.cart.findIndex((p)=>p.prodID == action.payload.prodID)
                if(isPresentIndex1){
                const updatedCart = state.cart.filter((p)=> p.prodID != action.payload.prodID)
                const totalAmount1 = state.cart.reduce((ta,p)=>{
                    const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)
                },0)
                return { 
                    cart:updatedCart, 
                    cartLength:updatedCart.length,
                    totalAmount:totalAmount1
                    }
                }

        case "DecreaseQuantity" :
                
                const isPresentIndex2 = state.cart.findIndex((p)=>p.prodID == action.payload.prodID)
                if(state.cart[isPresentIndex2].quantity == 1 ){
                    const updatedCart = state.cart.filter((p)=> p.prodID != action.payload.prodID)
                const totalAmount1 = updatedCart.reduce((ta,p)=>{
                    const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)
                },0)
                return { 
                    cart:updatedCart, 
                    cartLength:updatedCart.length,
                    totalAmount:totalAmount1
                    }
                }else{
            const updatedCArt1 = state.cart.map((p, index) => {
                    if (index === isPresentIndex2) {
                        return { ...p, quantity: p.quantity - 1}
                    }
                return p
                })

        const totalAmount2 = updatedCArt1.reduce((ta,p)=>{
                    const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)
                },0)
                return { 
                    cart:updatedCArt1, 
                    cartLength:updatedCArt1.length,
                    totalAmount:totalAmount2
                    }
                }

        case "IncreaseQuantity":
                const isPresentIndex4 = state.cart.findIndex((p)=>p.prodID == action.payload.prodID)

            const updatedCArt2 = state.cart.map((p, index) => {
                    if (index === isPresentIndex4) {
                        return { ...p, quantity: p.quantity + 1}
                    }
                return p
                })

        const totalAmount3 = updatedCArt2.reduce((ta,p)=>{
                    const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)
                },0)
                return { 
                    cart:updatedCArt2, 
                    cartLength:updatedCArt2.length,
                    totalAmount:totalAmount3
                    }
        default:
            state
 } }

  
//  RemoveFromCart 
//  IncreaseQuantity 
//  DecreaseQuantity 
//  EmptyCart