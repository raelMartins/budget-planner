import React from 'react';
import StatsExpense from './StatsExpense';
import StatsIncome from './StatsIncome';

const StatsInfoContainer = props => {
    return(
        <div>
            <StatsIncome />
            <StatsExpense />
        </div>
    )
}

export default StatsInfoContainer;