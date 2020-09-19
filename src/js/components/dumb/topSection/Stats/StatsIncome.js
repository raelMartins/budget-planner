import React from 'react';

const StatsIncome = props => {
    return(
        <div className="stats-total-incomes">
            Incomes: {props.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </div>
    )
}

export default StatsIncome
;