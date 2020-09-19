import React from 'react';
import BudgetTitle from './BudgetTitle';
import BudgetValue from './BudgetValue';
import BudgetContainer from './BudgetContainer'

//create the stateless BudgetView component
const BudgetView = props => {
    return(
        //render a budget div containing the budget title, value and container components
        <div className="budget">
            <BudgetTitle period={props.data.period}/>
            <BudgetValue budget={props.data.budget}/>
            <BudgetContainer data={props.data}/>
        </div>
    )
}
export default BudgetView