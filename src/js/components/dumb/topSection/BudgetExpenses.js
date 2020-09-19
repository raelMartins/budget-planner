import React from 'react'

//create a budget expenses stateless component
const BudgetExpenses = props => {
    return(
        //render a section to display the expenses in dollars
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">{props.expense.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                <div className="budget__expenses--percentage">{props.percentage > 1 ? `${Math.round(props.percentage)}%` : "---"}</div>
            </div>
        </div>
    )
}

export default BudgetExpenses;