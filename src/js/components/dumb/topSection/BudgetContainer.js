import React from 'react';
import BudgetExpenses from './BudgetExpenses';
import BudgetIncome from './BudgetIncome';

//create a budget container stateless component
const BudgetContainer = props => {
    return(
        //render a div containing the budget income and expenses components
        <div>
            <BudgetIncome income={props.data.totals.inc}/>
            <BudgetExpenses expense={props.data.totals.exp} percentage={props.data.percentage}/>
        </div>
    )
}

export default BudgetContainer;