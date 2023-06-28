
import './App.css';
import Header from './component/Header';
import Meals from './component/Meal/meals';
import Cart from './component/CartItem/cart';
import { useState } from 'react';

function App() {

  const[cartshow , setcartshow] = useState(false);

  const cartshowHandler = () => {
      setcartshow(!cartshow);
  }
  return (
    <div className='app'>
      {cartshow && <Cart closeCart={cartshowHandler} />}
      <Header showCart = {cartshowHandler}></Header>
      <Meals></Meals>
      
    </div>
  );
}

export default App;
