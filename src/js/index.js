import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import '../css/bootstrap.min.css';
import '../css/style.css'
//entry point for the app, imported react and the styling and the app component before rendering to the DOM
ReactDOM.render(<App />, document.getElementById("root"))