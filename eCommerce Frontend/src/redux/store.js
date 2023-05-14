import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { cartReducer } from "./cartSlice"
import { userReducer } from "./userSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE,
    PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


let reducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export let persistor = persistStore(store)
