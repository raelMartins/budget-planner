import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/style.scss';
import BudgetContextProvider from './contexts/BudgetContext';

ReactDOM.render(
  <BudgetContextProvider>
    <App />
  </BudgetContextProvider>,
  document.getElementById('root')
);
