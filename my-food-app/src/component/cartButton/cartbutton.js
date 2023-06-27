import React from "react";
import CartIcon from "./CartIcon";
import './cartButton.css'

function CartButton () {

    return(
        <button className="button">
            <span className="icon">
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">3</span>
        </button>
    )
}

export default CartButton ;