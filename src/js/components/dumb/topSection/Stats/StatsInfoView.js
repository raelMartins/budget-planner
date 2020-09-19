import React from 'react';
import StatsInfoContainer from './StatsInfoContainer';
import StatsInfoTitle from './StatsInfoTitle';
import StatsInfoValue from './StatsInfoValue';

const StatsInfoView = props => {
    return(
        <div className="budget">
            StatsInfoView
            <StatsInfoTitle />
            <StatsInfoValue />
            <StatsInfoContainer />
        </div>
    )
}

export default StatsInfoView;