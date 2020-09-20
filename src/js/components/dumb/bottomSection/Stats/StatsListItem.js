import React from 'react';
import StatsListItemButton from './StatsListItemButton';
import StatsListItemInfo from './StatsListItemInfo';

const StatsListItem = props => {
    const detailedItem = props.item.details.map(el => <StatsListItemInfo key={el.id} item={el}/>)
    return(
        <div className="list-item">
            <StatsListItemButton item={props.item}/>
            <div className="item-info-container active">
                {detailedItem}
            </div>
        </div>
    )
}

export default StatsListItem;