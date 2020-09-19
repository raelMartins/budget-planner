import React from 'react';
import StatsListItem from './StatsListItem';

const StatsMainContent = props => {
    return(
        <div className="container stats-container">
            <div className="stats-title">
                MONTHLY BUDGETS
            </div>
            <StatsListItem />
        </div>
    )
}

export default StatsMainContent;