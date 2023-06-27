import React from "react" ;
import { Fragment } from "react";
import MealsSummary from "./mealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals (){
    return (
        <Fragment>
            <MealsSummary></MealsSummary>

            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
}

export default Meals ;