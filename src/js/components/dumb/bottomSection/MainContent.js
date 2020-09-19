import React from 'react';
import EditAndSubmit from './EditAndSubmit';
import ListItem from './ListItem';

//created a stateless MainContent component
const MainContent = props => {
    // stored the allitems data from the props into this variable
    const items = props.data.allItems;
    //mapped the data to create an array of list items either expense or income
    const incomeList = items.inc.length > 0 ? items.inc.map( el => <ListItem key={el.id} completed={props.data.completed} data={el} handleDelete={props.handleDelete}/>) : "";
    const expenseList = items.exp.length > 0 ? items.exp.map( el => <ListItem key={el.id} completed={props.data.completed} data={el} handleDelete={props.handleDelete} totalIncome={props.data.totals.inc}/>) : "";
    
    return(
        // returning the data back to the Ui
        <div className="container clearfix">
            <div className="row budget-list mx-auto">
                <div className="income col-md-6">
                    <h2 className="income__title text-center">Income</h2>
                    <div className="income__list">
                        { incomeList }
                    </div>
                </div>
                <div className="expenses col-md-6">
                    <h2 className="expenses__title text-center">Expenses</h2>
                    <div className="expenses__list">
                        { expenseList }
                    </div>
                </div>
            </div>
            <EditAndSubmit 
                data={props.data}
                completeBudget={props.completeBudget} 
                editBudget={props.editBudget}
            />
        </div>
    )
}

export default MainContent;