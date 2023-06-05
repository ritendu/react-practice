import { useDispatch, useSelector } from "react-redux"
import {cleanCart,openModal} from "../features/cart/cartItems.slice"
const Modal = ()=>{
const dispatch = useDispatch();
return (
    <aside className='modal-container'>
    <div className='modal'>
      <h4>remove all items from your shopping cart?</h4>
      <div className='btn-container'>
        <button
          type='button'
          className='btn confirm-btn' onClick={()=>{
            dispatch(cleanCart())
            dispatch(openModal())
          }}
        >
          confirm
        </button>
        <button
          type='button'
          className='btn clear-btn'
        >
          cancel
        </button>
      </div>
    </div>
  </aside>
)
}

export default Modal