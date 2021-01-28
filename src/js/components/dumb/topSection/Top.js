import React from 'react';
import '../../../../scss/top.scss'


//create the stateless Top component
const Top = props => {
    return (
        //render the div with BudgetView component to the DOM
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget for <span className="budget__title--month">{props.data.period}</span>
                </div>
                <div className="budget__value">{props.data.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                <div>
                    <div className="budget__income">
                    <div className="text">Income</div>
                    <div className="extra">
                        <div className="value">{props.data.totals.inc.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                        <div className="percentage">&nbsp;</div>
                    </div>
                </div>
                <div className="budget__expenses">
                    <div className="text">Expenses</div>
                    <div className="extra">
                        <div className="value">{props.data.totals.exp.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                        <div className="percentage">{props.data.percentage > 1 ? `${Math.round(props.data.percentage)}%` : "---"}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Top;