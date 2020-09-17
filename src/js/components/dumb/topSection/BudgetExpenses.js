import React from 'react'

const BudgetExpenses = props => {
    return(
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