import { useDispatch, useSelector } from "react-redux"
import CartItem from './CartItem'
import { cleanCart } from "../features/cart/cartItems.slice";

const CartContainer = ()=>{
 const {cartItems,total} = useSelector((store)=>store.cart);
 const dispatch = useDispatch();
    return (
        <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
        {cartItems.map((item)=>{
      return <CartItem key={item.id} {...item}/>
        })  }
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total <span>{total}</span>
            </h4>
          </div>
          <button className='btn clear-btn' onClick={()=>{dispatch(cleanCart())}}>
            clear cart
          </button>
        </footer>
      </section>
    )
}

export default CartContainer