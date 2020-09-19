import React from 'react';
import AddBudget from './AddBudget';
import EditAndSubmit from './EditAndSubmit';
import MainContent from './MainContent'
import PageButtons from './PageButtons';

//created a stateless componenet for the bottom section
const Bottom = props =>{
        return(
            //rendering a bottom div containing an addbudget, maincontent, and page buttons components with their respective props
            <div className="bottom">
                <AddBudget
                    data={props.data} 
                    handleClick={props.handleClick} 
                    handleChange={props.handleChange} 
                />

                <MainContent 
                    data={props.data}
                    handleDelete={props.handleDelete}
                    completeBudget={props.completeBudget}
                    editBudget={props.editBudget}
                />
                <PageButtons 
                    data={props.data}        
                    changePage={props.changePage} 
                    currentPage={props.currentPage}
                />
            </div>
        ) 
}
export default Bottom;