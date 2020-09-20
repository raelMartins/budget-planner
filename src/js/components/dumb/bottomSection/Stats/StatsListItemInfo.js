import React from 'react';

const StatsListItemInfo = props => {
    return(
        <div className="">
            <div className="item-info-container">
                <div className="monthly-budget-information">
                    <span className="info-description">FRIDAY THE 18TH</span>
                    <span className="info-expense">$500.00</span>
                    <span className="info-income">$1,500.00</span>
                </div>
                <div className="monthly-budget-information">
                    <span className="info-description">SATURDAY THE 19TH</span>
                    <span className="info-expense">$500.00</span>
                    <span className="info-income">$1,500.00</span>
                </div>
                <div className="monthly-budget-information">
                    <span className="info-description">SUNDAY THE 20TH</span>
                    <span className="info-expense">$500.00</span>
                    <span className="info-income">$1,500.00</span>
                </div>
            </div>
        </div>
    )
}

export default StatsListItemInfo;