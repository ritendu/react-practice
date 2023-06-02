import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { cartItems } from "./data";
import Modal from "./Modal";
import { clearitem,removeItem,increase,decrease,calculateTotals } from "./cartItemsSlice";
import {openModal,closeModal}  from "./modalSlice"
import { useEffect } from "react";
function App() {
  const { amount, total,cartItems } = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state)=>state.modal)
  const dispatch = useDispatch();

 useEffect(()=>{
dispatch(calculateTotals())

 },[cartItems])

  return (
    <div className="middle">
{isOpen && <Modal></Modal>}
      {amount < 1 ? (
        <div>
          <h1>Cart is currently empty</h1>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => {
            return <div key={item.id}>{item.title}
            {item.amount}
            <button onClick={()=>dispatch(increase(item.id))}>increase amount</button>
            <button onClick={()=>dispatch(decrease(item.id))}>decrease amount</button>
            <button onClick={()=>dispatch(removeItem(item.id))}>remove Item</button></div>;
          })}
        </div>
      )}

      <button onClick={()=>dispatch(openModal())}>Clear item</button>
      <p>Amount: {amount}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
