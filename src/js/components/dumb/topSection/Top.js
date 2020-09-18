import React from 'react';
import BudgetView from './BudgetView';

//create the stateless Top component
const Top = props => {
    return (
        //render the div with BudgetView component to the DOM
        <div className="top">
            <BudgetView data={props.data}/>
        </div>
    )
}
export default Top;