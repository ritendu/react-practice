import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../cartItems"
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
    },
    increase:(state,action)=>{
const cartItem = state.cartItems.find((item)=>item.id===action.payload)
cartItem.amount = cartItem.amount + 1
    },
    decrease:(state,action)=>{
const cartItem = state.cartItems.find((item)=>item.id===action.payload)
cartItem.amount = cartItem.amount -1
    },
    remove:(state,action)=>{
        state.cartItems= state.cartItems.filter((item)=>item.id!==action.payload);

    },
    calculateTotals:(state)=>{
        console.log('Hello')
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
    }
}
})

export const {cleanCart,increase,decrease,remove,calculateTotals} = items.actions
export default items.reducer