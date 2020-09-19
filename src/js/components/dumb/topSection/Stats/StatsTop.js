import React from 'react';
import StatsInfoContainer from './StatsInfoContainer';
import StatsInfoTitle from './StatsInfoTitle';
import StatsInfoValue from './StatsInfoValue';

const StatsTop = props => {
    return(
        <div className="stats-top">
            <StatsInfoTitle year={props.year}/>
            <StatsInfoValue budget={props.budget}/>
            <StatsInfoContainer totals={props.totals}/>
        </div>
    )
}

export default StatsTop;