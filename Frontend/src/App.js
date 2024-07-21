import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function App() {
const {isPending,data} = useQuery({
  queryKey:["products"],
  queryFn:async()=>{
    const {data} = await axios.get('http://localhost:4000/v1/get/tasks');
    console.log(data,"data")
    return data
  }
})

  return (
<div>
{!isPending && data?.data.length!==0 ? data?.data.map((item,index)=>{
return (
  <div key={index}>
      <h3>{item.title}</h3>
  </div>

)
}):null}
</div>
  );
}

export default App;
