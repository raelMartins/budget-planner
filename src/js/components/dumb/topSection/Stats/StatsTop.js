import React from 'react';
import StatsInfoContainer from './StatsInfoContainer';
import StatsInfoTitle from './StatsInfoTitle';
import StatsInfoValue from './StatsInfoValue';

const StatsTop = props => {
    return(
        <div className="stats-top">
            <StatsInfoTitle />
            <StatsInfoValue />
            <StatsInfoContainer />
        </div>
    )
}

export default StatsTop;