import React from 'react';

const PageButtons = props => {
    return(
        <div>
            <div className="goto-page page-btn-previous">
                <button className="btn page-btn"><i className="fas fa-chevron-left"></i></button>
            </div>
            <div className="goto-page page-btn-next">
                <button className="btn page-btn"><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}
export default PageButtons;