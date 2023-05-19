import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct: (state, action)=> {
                const itemIndex = state.products.findIndex(
                    (product) => product._id === action.payload._id
                )
                if (itemIndex >= 0){
                   state.products[itemIndex].quantity += (action.payload.quantity)

                } else {
                    const tempProduct = {...action.payload, quantity: action.payload.quantity}
                    state.products.push(tempProduct);
                }
                
        },
        addOneProduct: (state, action)=> {
            const itemIndex = state.products.findIndex(
                (product) => product._id === action.payload._id
            )
            if (itemIndex >= 0){
               state.products[itemIndex].quantity += 1

            } else {
                const tempProduct = {...action.payload, quantity: 1}
                state.products.push(tempProduct);
            }
            
        },
        removeFromCart(state, action) {
            const nextCartItems = state.products.filter(
                (product) => product._id !== action.payload._id
            )
            state.products = nextCartItems
            localStorage.setItem("products", JSON.stringify(state.products))
        },
        decreaseCart(state, action){
            const itemIndex = state.products.findIndex(
                product => product._id === action.payload._id
            )

            if(state.products[itemIndex].quantity > 1){
                state.products[itemIndex].quantity -= 1

            } else if(state.products[itemIndex].quantity === 1){
                const nextCartItems = state.products.filter(
                    (product) => product._id !== action.payload._id
                )
                state.products = nextCartItems
                localStorage.setItem("products", JSON.stringify(state.products))
            }
        },

        clearCart(state, action){
            state.products = []
            localStorage.setItem("products", JSON.stringify(state.products))
        },
        getTotals(state, action){
            let {total, quantity} = state.products.reduce(
                (cartTotal, product) => {
                const { price, quantity} = product;
                const itemTotal = price * quantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += quantity

                return cartTotal
            }, 
            {
                total: 0,
                quantity: 0,
            }
            )

            state.quantity = quantity
            state.total = total
        },
        
    },

})

export const {addProduct, addOneProduct, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions
export const cartReducer = cartSlice.reducer