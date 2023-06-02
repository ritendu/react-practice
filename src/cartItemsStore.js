import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartItemsSlice'
import openReducer from './modalSlice'
export const store = configureStore({
    reducer:{
cart:cartReducer,
modal:openReducer
    }
})