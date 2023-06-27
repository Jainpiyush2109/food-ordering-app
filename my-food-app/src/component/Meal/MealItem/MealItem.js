import React from "react";
import "./MealItem.css";

import MealItemForm from "./MealItemForm";
function MealItem(props) {
  return (
    <li className="meal">
      <div >
        <h3>{props.mealName}</h3>
        <div className="description"> {props.mealDescription}</div>
        <div className="price"> {props.mealPrice}</div>
      </div>
      <div>
        <MealItemForm id = {props.id}></MealItemForm>
      </div>
    </li>
  );
}
export default MealItem;
