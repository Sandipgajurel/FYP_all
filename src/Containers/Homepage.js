import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Homepage (){
    
return(
    <div  style={{margin:'0',minHeight:'100vh', width:'100%', height:'100%', flexDirection:''}}>
    <Navbar />
    <Sidebar />

    <Footer />
    </div>
);
}
export default Homepage;