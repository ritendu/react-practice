import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/config";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  userCount: 0,
  diseaseCount: 0,
  templateCount: 0,
  users: [],
  diseases: [],
};
export const dashboard = createAsyncThunk(
  "admin/dashboard",
  async (user, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken")
    try {
      const response = await axios.get(`${API_URL}/admin/dashboard`,{
        headers: { Authorization: `Bearer ${accessToken}` }
    }
    );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const dashboardSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboard.fulfilled, (state, { payload }) => {
       
        state.isLoading = false;
        state.userCount = payload.result.userCount;
        state.diseaseCount = payload.result.diseaseCount;
        state.templateCount = payload.result.formTemplateCount;
        state.users = payload.result.users;
        state.diseases = payload.result.diseases
        
      })
      .addCase(dashboard.rejected, (state, { payload }) => {
        state.isLoading = false;
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken")
        window.location.reload()

        toast.error(payload.message);
      });
  },
});

export default dashboardSlice.reducer;
