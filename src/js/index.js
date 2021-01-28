import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App'
// import '../scss/bootstrap.min.css';
import '../scss/style.scss'
//entry point for the app, imported react and the styling and the app component before rendering to the DOM
ReactDOM.render(<App />, document.getElementById("root"))
=======
import App from './App';
import '../scss/style.scss';
import BudgetContextProvider from './contexts/BudgetContext';

ReactDOM.render(
  <BudgetContextProvider>
    <App />
  </BudgetContextProvider>,
  document.getElementById('root')
);
>>>>>>> react-version
