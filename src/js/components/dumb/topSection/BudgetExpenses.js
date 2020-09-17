import React from 'react'

const BudgetExpenses = props => {
    return(
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">{props.expense.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                <div className="budget__expenses--percentage">70%</div>
            </div>
        </div>
    )
}

export default BudgetExpenses;