import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from "redux-persist";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart:(state) => {
            state.isFetching = true;
        },
        loginSuccess:(state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure:(state) => {
            state.isFetching = false
            state.error = true

        },
        extraReducers: (builder) => {
            builder.addCase(PURGE, (state) => {
                userSlice.removeAll(state);
            });
        }
    }
})

export const {loginStart, loginSuccess, loginFailure} = userSlice.actions
export const userReducer = userSlice.reducer
