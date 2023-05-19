import { createSlice } from '@reduxjs/toolkit'
// import { PURGE } from "redux-persist";

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
                    (item) => item.id === action.payload.id
                )
                if (itemIndex >= 0){
                   const newQuantity = state.products[itemIndex].quantity += (action.payload.quantity)
                   state.total = newQuantity * action.payload.price
                } else {
                    state.quantity += 1;
                    state.products.push(action.payload);
                    state.total = action.payload.quantity * action.payload.price
                }
                
        },
        removeFromCart(state, action) {
            const nextCartItems = state.CartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decreaseCart(state, action){

        }

        
    },
    // extraReducers: (builder) => {
    //     builder.addCase(PURGE, () => {
    //         return initialState;
    //     });
    // }
})

export const {addProduct} = cartSlice.actions
export const cartReducer = cartSlice.reducer