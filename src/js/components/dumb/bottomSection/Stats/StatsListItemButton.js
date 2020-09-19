import React from 'react';

const StatsListItemButton = props => {
    return(
        <button className="btn accordion">
            <span className="monthly-description">SEPTEMBER 2020</span>
            <span className="monthly-expense">$12,500.00</span>
            <span className="monthly-income">$24,000.00</span>
            <span className="monthly-total">$11,500.00</span>
        </button>
    )
}

export default StatsListItemButton;