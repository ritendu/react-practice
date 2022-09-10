import { useParams } from "react-router-dom"
import products from "./data"
const SingleProduct =()=>{
    const {productId} = useParams()
    const product = products.find((product)=>product.id===productId);
    const {image,name}= product;
    return (
    <div>
        <img src={image} alt={name}></img>
        <h5>{name}</h5>
    </div>
)

}

export default SingleProduct