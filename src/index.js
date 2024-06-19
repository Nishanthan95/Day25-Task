//1)We have to import react and reactDom libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'
//2) we have to get the reference to the div with the id root
const ele = document.getElementById('root');
//3) we will tell to react to take control of the element
const root = ReactDom.createRoot(ele);
//4)create the component
//5) show the component on the screen
root.render(<App/>)
// fragment which help us to remove the aditional element in our dom
