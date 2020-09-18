import React from 'react';

//create the budget title stateless copmonent
const BudgetTitle = props => {
    return(
        //render a budget__title div  with the time period in it
        <div className="budget__title">
            Available Budget for <span className="budget__title--month">{props.period}</span>
        </div>
    )
}

export default BudgetTitle;