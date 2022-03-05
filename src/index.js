import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUpForm from './Containers/Signup';
import Navbar from './Containers/Navbar';
import Footer from './Containers/Footer';
import LoginForm from './Containers/Login';
ReactDOM.render(
    <BrowserRouter>
    <App />
    {/* <LoginForm /> */}
    {/* <SignUpForm /> */}
    {/* <Navbar /> */}
    {/* <Footer /> */}
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
