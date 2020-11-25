import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';          // import App.js,if extension is js,we ignore
import LearnJsx from './LearnJsx';

// PWA progressive web application: we can visit the web without connection after first connection
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LearnJsx />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
