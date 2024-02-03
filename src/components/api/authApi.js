import catchAsync from "../utils/catchAsync"
import { API_URL } from "../../constants/config"
import http from "./http";
export const userLogin = catchAsync(async (values) => {
    const data = await http.post("/auth/login", values);
    if (data && data.status === 200) {
        console.log(data,"data")
    }
    return data;
});


export const refreshLoggedInUser = catchAsync(async(refreshToken)=>{
    try {
     const tokens = await http.post('/auth/refresh-tokens',refreshToken);
     return tokens
    } catch (error) {
        return false
    }
})