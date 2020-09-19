import React from 'react'

const StatsExpense = props => {
    return(
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">StatsExpense</div>
                <div className="budget__expenses--percentage">---</div>
            </div>
        </div>
    )
}

export default StatsExpense;