import React from 'react';
import BudgetTitle from './BudgetTitle';
import BudgetValue from './BudgetValue';
import BudgetContainer from './BudgetContainer'

const BudgetView = props => {
    return(
        <div className="budget">
            <BudgetTitle />
            <BudgetValue />
            <BudgetContainer />
        </div>
    )
}
export default BudgetView