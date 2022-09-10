import { useParams } from "react-router-dom"

const SingleProduct =()=>{
    const {productId} = useParams()
return (
    <div>
        <h2>{productId}</h2>
    </div>
)

}

export default SingleProduct