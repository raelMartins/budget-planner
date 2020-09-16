import React from 'react';
import BudgetExpenses from './BudgetExpenses';
import BudgetIncome from './BudgetIncome';

const BudgetContainer = props => {
    return(
        <div>
            <BudgetIncome />
            <BudgetExpenses />
        </div>
    )
}

export default BudgetContainer;