import React from 'react';
import StatsListItem from './StatsListItem';

const StatsMainContent = props => {
    const allItems = props.data.allItems.all.map(el => <StatsListItem key={el.id} item={el} showDetails={props.showDetails}/>)
    return(
        <div className="container stats-container">
            <div className="stats-title">
                MONTHLY BUDGETS
            </div>
            {allItems}
        </div>
    )
}

export default StatsMainContent;