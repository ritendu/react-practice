import catchAsync from "../utils/catchAsync"
import { API_URL } from "../../constants/config"
import axios from 'axios'
export const userLogin  = catchAsync(async(values)=>{
const data = await axios.post(`${API_URL}/admin/login`,values);
if(data && data.status === 200){
localStorage.setItem()
}
return data

})