import React from 'react';
import BudgetExpenses from './BudgetExpenses';
import BudgetIncome from './BudgetIncome';

const BudgetContainer = props => {
    return(
        <div>
            <BudgetIncome income={props.data.totals.inc}/>
            <BudgetExpenses expense={props.data.totals.exp} percentage={props.data.percentage}/>
        </div>
    )
}

export default BudgetContainer;