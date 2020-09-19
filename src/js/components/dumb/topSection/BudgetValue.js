import React from 'react';

//create the budget value component
const BudgetValue = props => {
    return(
        //render the value in dollars
        <div className="budget__value">{props.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
    )
}

export default BudgetValue;