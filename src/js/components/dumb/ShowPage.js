import React from 'react';
import Daily from '../smart/Daily';
import Monthly from '../smart/Monthly';
import Statistics from '../smart/Statistics';

//create the stateless show page component
const ShowPage = props => {
    let page;
    //check the current page and assign the appropriate component to the variable
    if (props.currentPage === "monthly") {
        page = <Monthly 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.monthly}
            submitData={props.submitData}
        />
    } else if (props.currentPage === "daily") {
        page = <Daily 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.daily}
            submitData={props.submitData}
        />
    } else if (props.currentPage === "stats") {
        page = <Statistics 
            changePage={props.changePage} 
            currentPage={props.currentPage}
            pageState={props.pageState.stats}
        />
    }
    return(
        //return the assigned variable with the stored component
        <div>
            { page }
        </div>
    )
}
export default ShowPage;