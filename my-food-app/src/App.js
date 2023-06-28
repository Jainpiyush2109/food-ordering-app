
import './App.css';
import Header from './component/Header';
import Meals from './component/Meal/meals';
import Cart from './component/CartItem/cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {

  const[cartshow , setcartshow] = useState(false);

  const cartshowHandler = () => {
      setcartshow(!cartshow);
  }
  return (
    <CartProvider >
      {cartshow && <Cart closeCart={cartshowHandler} />}
      <Header showCart = {cartshowHandler}></Header>
      <Meals></Meals>
      
    </CartProvider>
  );
}

export default App;
