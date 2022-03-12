import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import SignUpForm from './Containers/Signup';
import Navbar from './Containers/Navbar';
import Footer from './Containers/Footer';
import LoginForm from './Containers/Login';
import HomePage from "./Containers/Homepage";
import Error from "./Containers/Error";
import Dashboard from "./Containers/Dashboard";
import ProductAdd from "./Containers/Products/ProductAdd";
import ProductView from "./Containers/Products/ViewProduct";
import EditProduct from "./Containers/Products/editProduct";
const App = () => {

  return (
   <> 
   <Routes>
     <Route exact path='/' element={<HomePage />}></Route>
     <Route exact path='/login' element={<LoginForm />}></Route>
     <Route exact path='/signup' element={<SignUpForm />}></Route>
     <Route exact path='/Dashboard' element={<Dashboard />}></Route>
     <Route exact path='/ProductAdd' element={<ProductAdd />}></Route>
     <Route exact path='/ProductView' element={<ProductView />}></Route>
     <Route exact path='/editProduct/:productId' element={< EditProduct />}></Route>
     <Route path='*' element={<Error />} />
   </Routes>
   
   
   
   {/* <Navbar />
   <Footer /> */}
   </>
  );
}

export default App; 
 