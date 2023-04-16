// let's go!
// alert('hiiii we did itttt');

import React from 'react'; // react is one of our dependencies in package.json hence we importing it
import {render} from 'react-dom'; // to allow us to render on dom of our website
//creating class
// import StorePicker from './components/StorePicker';

// import App from './components/app';
import Router from './components/Router';

import './css/style.css';


// render(<StorePicker> </StorePicker>, document.querySelector('#main')); // index.html file has a div with a class of main, that is theb place where we will mount our react app
// render(<App></App>,document.querySelector('#main'));
render(<Router></Router>,document.querySelector('#main'));
