import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const world = React.createElement('em', null, "World");
// const title = React.createElement('h1', null, "Hello ", world, "!");
// const link = React.createElement('a', { href: "//devdocs.io" }, "Read More");
// const group = React.createElement(React.Fragment, null, title, link);

// root.render(group);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
