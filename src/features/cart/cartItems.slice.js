import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../cartItems"
import cartItems from "../../cartItems";
const initialState = {
    cartItems:[],
    amount:0,
    total:0,
    isLoading:true,
    isOpen:false

}

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  });

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
    
},
extraReducers: {
    [getCartItems.pending]: (state) => {
        console.log('Hello')
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
})

export const {cleanCart,increase,decrease,remove,calculateTotals,openModal} = items.actions
export default items.reducer