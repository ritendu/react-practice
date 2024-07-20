import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function App() {
const {isPending,data} = useQuery({
  queryKey:["products"],
  queryFn:async()=>{
    const {data} = await axios.get('https://dummyjson.com/products');
    console.log(data,"data")
    return data
  }
})

  return (
<div>
{!isPending && data?.products.length!==0 ? data?.products.map((item)=>{
return (
  <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
  </div>

)
}):null}
</div>
  );
}

export default App;
