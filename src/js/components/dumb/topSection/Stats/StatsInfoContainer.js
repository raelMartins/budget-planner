import React from 'react';
import StatsExpense from './StatsExpense';
import StatsIncome from './StatsIncome';

const StatsInfoContainer = props => {
    return(
        <div>
            <StatsIncome value={props.totals.inc}/>
            <StatsExpense value={props.totals.exp}/>
        </div>
    )
}

export default StatsInfoContainer;