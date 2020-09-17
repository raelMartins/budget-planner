import React from 'react';

const BudgetIncome = props => {
    return(
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