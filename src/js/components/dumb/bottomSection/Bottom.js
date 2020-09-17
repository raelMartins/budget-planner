import React from 'react';
import AddBudget from './AddBudget';
import MainContent from './MainContent'

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
            </div>
        ) 
}
export default Bottom;