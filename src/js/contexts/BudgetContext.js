import React, { useState, useEffect, createContext } from 'react';

export const BudgetContext = createContext();

const BudgetContextProvider = (props) => {
  //   const [page, setPage] = useState('daily');
  //   const [pages, setPages] = useState(['daily', 'monthly', 'stats']);
  //   const [dailyBudget, setDailyBudget] = useState({
  //     period: '',
  //     budget: 0,
  //     percentage: -1,
  //     currentItem: { type: 'inc', description: '', value: '' },
  //     allItems: { inc: [], exp: [], all: [] },
  //     totals: { inc: 0, exp: 0 }
  //   });
  //   const [monthlyBudget, setMonthlyBudget] = useState({
  //     period: '',
  //     budget: 0,
  //     percentage: -1,
  //     currentItem: { type: 'inc', description: '', value: '' },
  //     allItems: { inc: [], exp: [], all: [] },
  //     totals: { inc: 0, exp: 0 }
  //   });
  //   const [yearlyBudget, setYearlyBudget] = useState({
  //     period: '',
  //     budget: 0,
  //     allItems: { inc: [], exp: [], all: [] },
  //     totals: { inc: 0, exp: 0 }
  //   });
  // };

  // const submitData = (newItem) => {
  //   //create a variable that contains the new page where the new item data goes
  //   const pageIndex = pages.indexOf(currentPage);
  //   const newPage = pages[pageIndex + 1];

  //   //create a variable to represent the object containing the income and expenses objects
  //   const allItems = pageState[newPage].allItems;

  //   //create two new arrays based on the previous income and expenses array except these arrays are used to check if a submission has been input for that day already,
  //   //delete it, then give it a new value
  //   const newIncArr = allItems.inc.filter(
  //     (el) => el.description !== newItem.description
  //   );
  //   const newExpArr = allItems.exp.filter(
  //     (el) => el.description !== newItem.description
  //   );
  //   const newAllArr = allItems.all.filter(
  //     (el) => el.description !== newItem.description
  //   );

  //   //create two new reduced values for the inc and exp totals, use this to calc new budget
  //   const newIncTotal = newIncArr.reduce(
  //     (acc, item) => (acc += parseFloat(item.value)),
  //     0
  //   );
  //   const newExpTotal = newExpArr.reduce(
  //     (acc, item) => (acc += parseFloat(item.value)),
  //     0
  //   );

  //   //check to see if the budget was an income or an expense
  //   if (newItem.type === 'exp') {
  //     //set the state of the new page
  //     this.setState({
  //       pageState: {
  //         ...pageState,
  //         [newPage]: {
  //           ...pageState[newPage],
  //           allItems: {
  //             inc: newIncArr,
  //             exp: [...newExpArr, newItem],
  //             all: [...newAllArr, newItem]
  //           },
  //           totals: {
  //             inc: newIncTotal,
  //             exp: newExpTotal + Math.abs(newItem.value)
  //           },
  //           budget: newIncTotal - newExpTotal - Math.abs(newItem.value)
  //         }
  //       }
  //     });
  //   } else if (newItem.value === 0) {
  //     alert('There is no value to be added');
  //   } else {
  //     this.setState({
  //       pageState: {
  //         ...pageState,
  //         [newPage]: {
  //           ...pageState[newPage],
  //           allItems: {
  //             ...allItems,
  //             inc: [...newIncArr, newItem],
  //             exp: newExpArr,
  //             all: [...newAllArr, newItem]
  //           },
  //           totals: {
  //             inc: newIncTotal + Math.abs(newItem.value),
  //             exp: newExpTotal
  //           },
  //           budget: newIncTotal - newExpTotal + Math.abs(newItem.value)
  //         }
  //       }
  //     });
  //   }
  //   //get the state from the page currently being used and store it into the state of the App component
  //   const getState = (obj) => {
  //     this.setState({
  //       pageState: {
  //         ...this.state.pageState,
  //         [this.state.currentPage]: obj
  //       }
  //     });
  //   };
  //   //Change the page i'm on
  //   const changePage = (event, state) => {
  //     //calling the getstate function
  //     this.getState(state);

  //     //destructuring to get current page and pages array from state
  //     const { currentPage, pages } = this.state;

  //     //get the new page and set it to current page in the state
  //     const pageIndex = pages.indexOf(currentPage);
  //     const newPage =
  //       event.target.id === 'next' ? pages[pageIndex + 1] : pages[pageIndex - 1];
  //     this.setState({ currentPage: newPage });
  //   };

  return (
    <BudgetContext.Provider value={{}}>{props.children}</BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
