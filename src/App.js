import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import SignUpForm from './Containers/Signup';
import Navbar from './Containers/Navbar';
import Footer from './Containers/Footer';
import LoginForm from './Containers/Login';
import HomePage from "./Containers/Homepage";
import Error from "./Containers/Error";
const App = () => {
  
  return (
   <>
   <Routes>
     <Route exact path='/' element={<HomePage />}></Route>
     <Route exact path='/login' element={<LoginForm />}></Route>
     <Route exact path='/signup' element={<SignUpForm />}></Route>
     <Route path='*' element={<Error />} />
   </Routes>
   
   
   
   {/* <Navbar />
   <Footer /> */}
   </>
  );
}

export default App; 
 