import React from 'react';
import EditAndSubmit from './EditAndSubmit';
import ListItem from './ListItem';

const MainContent = (props) => {
  const incomeList = props.data.allItems.inc.map((el) => (
    <ListItem
      key={el.id}
      completed={props.data.completed}
      data={el}
      handleDelete={props.handleDelete}
    />
  ));

  const expenseList = props.data.allItems.exp.map((el) => (
    <ListItem
      key={el.id}
      completed={props.data.completed}
      data={el}
      handleDelete={props.handleDelete}
      totalIncome={props.data.totals.inc}
    />
  ));

  return (
    <div className="container">
      <div className="budget-list">
        <div className="income">
          <h2 className="income__title">Income</h2>
          <div className="income__list">{incomeList}</div>
        </div>
        <div className="expenses col-md-6">
          <h2 className="expenses__title">Expenses</h2>
          <div className="expenses__list">{expenseList}</div>
        </div>
      </div>
      <EditAndSubmit
        data={props.data}
        completeBudget={props.completeBudget}
        editBudget={props.editBudget}
      />
    </div>
  );
};

export default MainContent;
