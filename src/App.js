import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals,getCartItems} from './features/cart/cartItems.slice';
import { useEffect } from 'react';
import Modal from './components/Modal';
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(cartItems,"isLoading")
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(()=>{
dispatch(getCartItems())
  },[])

  // useEffect(() => {
  //   dispatch(getCartItems('random'));
  // }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;