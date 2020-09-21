import React from 'react';

const StatsListItemButton = props => {
    return(
        <div className={`row accordion ${props.item.isActive ? "item-active" : ""}`} onClick={() => props.showDetails(props.item.id)}>
            <span className="monthly-description col-5">{props.item.description}</span>
            <span className="monthly-total col-3" style={props.item.type === "exp" ? {color: "red"} : {color: 'teal'}}>{` ${props.item.type === "exp" ? "-" : "+"} ${props.item.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}`}</span>
            <span className="monthly-income col-2">{props.item.incomes.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
            <span className="monthly-expense col-2">{props.item.expenses.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
        </div>
    )
}

export default StatsListItemButton;