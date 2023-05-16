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
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
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