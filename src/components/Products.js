import { Link } from "react-router-dom"
import products from "./data"
const Products = ()=>{
    return (
        <div>
           {products.map(product=>{
            return (
                <div key={product.id}>
<h5>{product.name}</h5>
<Link to={`/products/${product.id}`}>more info</Link>
                </div>
            )
           })}
        </div>
    )
}

export default Products