import React from 'react';

const BudgetValue = props => {
    return(
        <div className="budget__value">{props.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
    )
}

export default BudgetValue;