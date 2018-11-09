import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

// const currentDare=()=>{
//   const date=new Date();
//   return date.toDateString();
// }

// const greeting=<h1>Hello word, current date: {currentDare()}</h1>

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>
, document.getElementById('root'));
// ReactDOM.render(greeting, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
