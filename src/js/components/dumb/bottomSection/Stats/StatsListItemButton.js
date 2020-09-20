import React from 'react';

const StatsListItemButton = props => {
    return(
        <button className="btn accordion">
            <span className="monthly-description">{props.item.description}</span>
            <span className="monthly-expense">{props.item.expenses.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
            <span className="monthly-income">{props.item.incomes.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
            <span className="monthly-total">{` ${props.item.type === "exp" ? "-" : "+"} ${props.item.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}`}</span>
        </button>
    )
}

export default StatsListItemButton;