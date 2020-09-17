import React from 'react';
import BudgetTitle from './BudgetTitle';
import BudgetValue from './BudgetValue';
import BudgetContainer from './BudgetContainer'

const BudgetView = props => {
    return(
        <div className="budget">
            <BudgetTitle month={props.data.month}/>
            <BudgetValue budget={props.data.budget}/>
            <BudgetContainer data={props.data}/>
        </div>
    )
}
export default BudgetView