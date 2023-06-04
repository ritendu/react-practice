import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems:cartItems,
    amount:0,
    total:0,
    isLoading:true

}
export const items = createSlice({
name:'cart',
initialState,
reducers:{
    cleanCart:(state)=>{
        state.cartItems=[]
    }
}
})

export default items.reducer