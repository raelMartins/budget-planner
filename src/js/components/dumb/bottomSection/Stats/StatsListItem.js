import React from 'react';
import StatsListItemButton from './StatsListItemButton';
import StatsListItemInfo from './StatsListItemInfo';

const StatsListItem = props => {
    return(
        <div className="list-item">
            <StatsListItemButton item={props.item}/>
            {/* <StatsListItemInfo /> */}
        </div>
    )
}

export default StatsListItem;