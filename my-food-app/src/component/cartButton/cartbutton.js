import{ useContext } from "react";
import CartIcon from "./CartIcon";
import './cartButton.css'
import CartContext from "../../store/cart-context";


function CartButton (props) {

    const cartctx = useContext(CartContext);
    const numberOfCartItems = cartctx.items.reduce((curNumber , item)=>{
        return curNumber + item.amount ;
    } , 0);
    
    
    return(
        <button className="button" onClick={props.showCart}>
            <span className="icon">
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton ;