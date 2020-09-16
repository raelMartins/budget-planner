import React from 'react';

const MainContent = props => {
    return(
        <div className="container clearfix">
            <div className="row budget-list mx-auto">
                <div className="income col-md-6">
                    <h2 className="income__title text-center">Income</h2>

                    <div className="income__list">
                    </div>
                </div>
                <div className="expenses col-md-6">
                    <h2 className="expenses__title text-center">Expenses</h2>

                    <div className="expenses__list"></div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;