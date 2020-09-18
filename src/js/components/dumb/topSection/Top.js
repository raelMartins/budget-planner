import React from 'react';
import BudgetView from './BudgetView';

const Top = props => {
    return (
        <div className="top">
            <BudgetView data={props.data}/>
        </div>
    )
}
export default Top;