import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import img2 from '../Images/2.jpg';
import Sidebar from './Sidebar';

function Homepage (){
    
return(
    <div style={{margin:'0',minHeight:'100vh',display:'flex', flexDirection:'column'}}>
    <Navbar />
    <Sidebar />

    <Footer />
    </div>
);
}
export default Homepage;