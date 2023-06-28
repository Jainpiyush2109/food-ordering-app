import React from "react";
import "./MealItem.css";
import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";



function MealItem(props) {

  const cartCtx = useContext(CartContext) ;

  const onAddAmountHandler = (amount) => {
      cartCtx.addItem({
        id:props.id ,
        name : props.name,
        amount : amount ,
        price : props.price
      })
  }
  return (
    <li className="meal">
      <div >
        <h3>{props.name}</h3>
        <div className="description"> {props.description}</div>
        <div className="price"> {props.price}</div>
      </div>
      <div>
        <MealItemForm id = {props.id} onAddAmount = { onAddAmountHandler}></MealItemForm>
      </div>
    </li>
  );
}
export default MealItem;
