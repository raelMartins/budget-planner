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
            <button 
                className="btn clear-data" 
                style={allItems.length > 0 ? {display: "block"} : {display: "none"}} 
                onClick={props.clearAllData}
            >Clear</button>
        </div>
    )
}

export default StatsMainContent;