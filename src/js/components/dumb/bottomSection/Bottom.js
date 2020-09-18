import React from 'react';
import AddBudget from './AddBudget';
import MainContent from './MainContent'
import PageButtons from './PageButtons';

const Bottom = props =>{

        return(
            <div className="bottom">
                <AddBudget
                    data={props.data} 
                    handleClick={props.handleClick} 
                    handleChange={props.handleChange} 
                />

                <MainContent 
                    data={props.data}
                    handleDelete={props.handleDelete}
                />
                <PageButtons />
            </div>
        ) 
}
export default Bottom;