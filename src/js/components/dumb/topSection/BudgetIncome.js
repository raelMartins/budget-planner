import React from 'react';

//create the stateless BudgetIncome component
const BudgetIncome = props => {
    return(
        //render a section to display the Income in dollars
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">{props.income.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
    )
}

export default BudgetIncome;