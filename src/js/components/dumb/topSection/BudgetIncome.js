import React from 'react';

const BudgetIncome = props => {
    return(
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">7,500.00</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
    )
}

export default BudgetIncome;