import React from 'react';

const StatsListItemInfo = props => {
    return(
            <div>
                <div className="row monthly-budget-information">
                    <span className="info-description col-5">{props.item.description}</span>
                    <span className="info-value col-3">{props.item.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                    <span className="info-income col-2">{parseFloat(props.item.incomes).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                    <span className="info-expense col-2">{parseFloat(props.item.expenses).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                </div>
                {/* <div className="monthly-budget-information">
                    <span className="info-description">SATURDAY THE 19TH</span>
                    <span className="info-expense">$500.00</span>
                    <span className="info-income">$1,500.00</span>
                </div>
                <div className="monthly-budget-information">
                    <span className="info-description">SUNDAY THE 20TH</span>
                    <span className="info-expense">$500.00</span>
                    <span className="info-income">$1,500.00</span>
                </div> */}
            </div>
    )
}

export default StatsListItemInfo;