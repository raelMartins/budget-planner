import React from 'react'

const StatsExpense = props => {
    return(
        <div className="stats-total-expenses">
            Expenses: {props.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </div>
    )
}

export default StatsExpense;