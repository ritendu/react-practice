import { useSelector,useDispatch } from "react-redux"
import CartItems from "./CartItems"
import { clearCart } from "../features/cartSlice";

const CartContainer = ()=>{
    const dispatch = useDispatch();

    const {cartItems,amount,total} = useSelector(store=>store.cart);

    if(amount<1){
        return <section className="cart">
<header>
    <h2>your bag</h2>
    <h4 className="empty-cart">is currently empty</h4>
</header>
        </section>
    }
return (
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map(item=>{
                return <CartItems key={item.id} {...item}></CartItems>
            })}
        </div>
        <footer>
            <br/>
            <div className="cart-total">
            <h4>total <span>${total}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={()=>dispatch(clearCart())}>clear cart</button>
        </footer>
    </section>
)
}

export default CartContainer
