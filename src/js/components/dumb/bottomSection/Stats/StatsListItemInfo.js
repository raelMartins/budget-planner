import React from 'react';

const StatsListItemInfo = props => {
    return(
            <div className="row monthly-budget-information">
                <span className="info-description col-5">{props.item.description}</span>
                <span className="info-value col-3" style={props.item.type === "exp" ? {color: "red"} : {color: "teal"}}>{parseFloat(props.item.value).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                <span className="info-income col-2">{props.item.incomes == 0 ? "---" : parseFloat(props.item.incomes).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                <span className="info-expense col-2">{props.item.expenses == 0 ? "---" : parseFloat(props.item.expenses).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
            </div>
    )
}

export default StatsListItemInfo;