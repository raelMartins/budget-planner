import React from 'react';

const BudgetTitle = props => {
    return(
        <div className="budget__title">
            Available Budget in <span className="budget__title--month">%Month%</span>
        </div>
    )
}

export default BudgetTitle;