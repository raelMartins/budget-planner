import React from 'react';

const BudgetTitle = props => {
    return(
        <div className="budget__title">
            Available Budget for <span className="budget__title--month">{props.month}</span>
        </div>
    )
}

export default BudgetTitle;