import React from "react";
import { Fragment } from "react";
import './Header.css'

import image from '../Assets/food.jpg'
import CartButton from "./cartButton/cartbutton";

function Header(props) {

    return (

        <Fragment >
            <header className="header">
            <h1>React Meal App
            </h1>
            <CartButton showCart = {props.showCart}></CartButton>
            </header>
            
            
            <div className="main-image">
                <img src={image} alt=" food items"></img>
            </div>


        </Fragment>
    )

}

export default Header ;
