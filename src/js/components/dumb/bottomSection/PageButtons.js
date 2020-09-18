import React from 'react';

const PageButtons = props => {
    return(
        <div>
            {props.currentPage === "daily" ? "" :
            <div className="goto-page page-btn-previous">
                <button 
                    className="btn page-btn" 
                    id="prev" 
                    onClick={() => props.changePage(event,props.data)}
                >
                    <i className="fas fa-chevron-left" id="prev"></i>
                </button>
            </div>}
            {props.currentPage === "stats" ? "" :
            <div className="goto-page page-btn-next">
                <button 
                    className="btn page-btn" 
                    id="next" 
                    onClick={() => props.changePage(event,props.data)} 
                >
                    <i className="fas fa-chevron-right" id="next"></i>
                </button>
            </div>}
        </div>
    )
}
export default PageButtons;