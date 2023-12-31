import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/auth.slice'
export const store = configureStore({
    reducer: {
        authReducer
    },
  });