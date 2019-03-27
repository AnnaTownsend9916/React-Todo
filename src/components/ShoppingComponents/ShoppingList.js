// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Shopping from "./Shopping";

const ShoppingList = props => {
    return(
        <div className="shopping-list">
        <h1>Shopping List</h1>
        <Shopping />
        </div>
    );
}

export default ShoppingList;