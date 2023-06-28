import CartItem from './CartItem'
import './cart.css'
import Modal from '../UI/modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

function Cart (props){
    const cartItemscontext = useContext(CartContext);

    const cartItemAddHandler = (item) =>{
        cartItemscontext.addItem(item)
    }

    const cartItemRemoveHandler = (id) =>{
        cartItemscontext.removeItem(id)
    }

    const TotalAmount = `$${cartItemscontext.totalAmount.toFixed(2)}` ;

    const cartItems = (
        <ul className='cart-items'>
                {cartItemscontext.items.map((item) => (
                    <CartItem key = {item.id} name={item.name} amount = {item.amount} price = { item.price} 
                    onAdd={cartItemAddHandler.bind(null,item)}
                    onRemove = { cartItemRemoveHandler.bind(null,item.id)}>

                    </CartItem>
                ))}
            </ul>
    )

    return (
        <Modal>
            {cartItems}
            
            <div className='total'>
                <span> Total Amount</span>
                <span> {TotalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.closeCart}> close</button>
                <button className='button'>Order</button>
            </div>

        </Modal>
    )
}
export default Cart ;