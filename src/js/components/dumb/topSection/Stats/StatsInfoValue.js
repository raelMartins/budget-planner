import React from 'react';

const StatsInfoValue = props => {
    return(
        <div className="stats-total-budget">
            {props.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </div>
    )
}

export default StatsInfoValue;