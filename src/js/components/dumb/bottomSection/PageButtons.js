import React from 'react';

//create a stateless component to display buttons
const PageButtons = props => {
    return(
        //render our buttons to the page and give them functionality to change the page thereby adding the current pages' state to the app component
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