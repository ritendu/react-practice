import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../cartItems"
import cartItems from "../../cartItems";
const initialState = {
    cartItems:cartItems,
    amount:0,
    total:0,
    isLoading:true,
    isOpen:false

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
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
    },
    openModal:(state)=>{
        state.isOpen = !state.isOpen
    },
}
})

export const {cleanCart,increase,decrease,remove,calculateTotals,openModal} = items.actions
export default items.reducer