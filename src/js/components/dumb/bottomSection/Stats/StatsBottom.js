import React from 'react';
import PageButtons from '../PageButtons';
import StatsMainContent from './StatsMainContent';

const StatsBottom = props => {
    return(
        <div className="stats-bottom">
            <StatsMainContent 
                data={props.data}
                showDetails={props.showDetails}
                clearAllData={props.clearAllData}
            />
            <PageButtons  
                data={props.data} 
                currentPage={props.currentPage} 
                changePage={props.changePage}
            />
        </div>
    )
}

export default StatsBottom;