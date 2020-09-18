import React from 'react';
import Daily from '../smart/Daily';
import Monthly from '../smart/Monthly';
import Statistics from '../smart/Statistics';

const ShowPage = props => {
    let page;
    if (props.currentPage === "monthly") {
        page = <Monthly 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.monthly}
        />
    } else if (props.currentPage === "daily") {
        page = <Daily 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.daily}
        />
    } else if (props.currentPage === "stats") {
        page = <Statistics 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.stats}
        />
    }
    return(
        <div>
            { page }
        </div>
    )
}
export default ShowPage;