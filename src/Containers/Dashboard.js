import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
function Dashboard (){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/ProductAdd`; 
      navigate(path);
    }
return(
    <div >
    <Navbar />
    
    <button type="button" class="btn btn-primary" onClick={routeChange}>Add products</button>
<div style={{position:'fixed',bottom:'0',width:'100%'}}>
    <Footer />
    </div>
    </div>
);
}
export default Dashboard;