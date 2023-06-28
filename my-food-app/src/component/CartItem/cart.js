import CartItem from './CartItem'
import './cart.css'
import Modal from '../UI/modal'

function Cart (props){

    const cartItems = [{id:'c1' , name : 'Sushi' , amount:2 , price: 12.99}].map((item) => <CartItem name={item.name} amount = {item.amount} price = { item.price}></CartItem>)

    return (
        <Modal>
            <ul className='cart-items'>
                {cartItems}
            </ul>
            
            <div className='total'>
                <span> Total Amount</span>
                <span> 6856</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.closeCart}> close</button>
                <button className='button'>Order</button>
            </div>

        </Modal>
    )
}
export default Cart ;