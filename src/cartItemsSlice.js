import { createSlice } from "@reduxjs/toolkit";
import {cartItems} from './data.js'
const initialState={
    cartItems:cartItems,
    amount:1,
    total:0,
    isLoading:true
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearitem:(state)=>{
           
state.cartItems =[]
        },
        removeItem:(state,action)=>{
            console.log(action,"action")
           state.cartItems = [...state.cartItems.filter((item)=>item.id!==action.payload)];
        },
        increase:(state,action)=>{
            console.log(action,"action")
            const cartItem = state.cartItems.find((item)=>item.id===action.payload);
            cartItem.amount += 1
            // state.cartItems = [...cartItems,cartItem]
        },

        decrease:(state,action)=>{
            const cartItem = state.cartItems.find((item)=>item.id===action.payload)
            cartItem.amount-=1
        },

        calculateTotals:(state)=>{
            let amount = 0;
            let total = 0
state.cartItems.forEach((item)=>{

   amount += item.amount
 total +=item.amount * item.price
})

state.amount = amount
state.total = total
        }

    }

})
export const{clearitem,removeItem,increase,decrease,calculateTotals} = cartSlice.actions

export default cartSlice.reducer