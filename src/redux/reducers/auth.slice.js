import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/config";
import axios from "axios"
import http from "../../components/api/http";
const initialState = {
    isLoading:false,
    user:null,
    isForgetPassword:false
}
export const loginAdmin= createAsyncThunk(
    "admin/login",
    async (user, { rejectWithValue }) => {
  
      try {
        const response = await http.post("/vendor/vendor_login", user);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const forgetPassword= createAsyncThunk(
    "admin/forget-password",
    async (user, { rejectWithValue }) => {
  
      try {
        const response = await axios.post(`${API_URL}/admin/forget/password`, user);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const resetPassword= createAsyncThunk(
    "admin/reset-password",
    async (user, { rejectWithValue }) => {
  
      try {
        const response = await axios.post(`${API_URL}/admin/reset/password`, user);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  ); 

  export const changePassword= createAsyncThunk(
    "admin/change-password",
    async (user, { rejectWithValue }) => {
      const accessToken = localStorage.getItem("accessToken")
      try {
        const response = await axios.patch(`${API_URL}/admin/change/password`, user,{
          headers: { Authorization: `Bearer ${accessToken}` }
      });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  ); 


const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginAdmin.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginAdmin.fulfilled, (state, { payload }) => {
          console.log(payload,'payload')
          state.isLoading = false;
          state.user = payload.result.data;
          localStorage.setItem('user', JSON.stringify(payload?.result?.data))
          localStorage.setItem('accessToken', payload?.result?.tokens.accessToken)
          localStorage.setItem('refreshToken', payload?.result?.tokens.refreshToken)
    //  toast.success(payload.serverResponse.message);
        })
        .addCase(loginAdmin.rejected, (state, { payload }) => {
          state.isLoading = false;
        //   toast.error(payload.message);
        }).addCase(forgetPassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(forgetPassword.fulfilled, (state, { payload }) => {
          console.log(payload,'payload')
          state.isLoading = false;
          state.isForgetPassword = true
    //  toast.success(payload.serverResponse.message);
        })
        .addCase(forgetPassword.rejected, (state, { payload }) => {
          state.isLoading = false;
        //   toast.error(payload.message);
        }).addCase(resetPassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(resetPassword.fulfilled, (state, { payload }) => {
          console.log(payload,'payload')
          state.isLoading = false;
    //  toast.success(payload.serverResponse.message);
        })
        .addCase(resetPassword.rejected, (state, { payload }) => {
          state.isLoading = false;
        //   toast.error(payload.message);
        }).addCase(changePassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(changePassword.fulfilled, (state, { payload }) => {
          state.isLoading = false;
    //  toast.success(payload.serverResponse.message);
        })
        .addCase(changePassword.rejected, (state, { payload }) => {
          state.isLoading = false;
        //   toast.error(payload.message);
        })
      
    },
  });
  

  export default userSlice.reducer;