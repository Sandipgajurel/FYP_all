import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ProductView from './Products/ViewProduct';
import { button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Cardimage from './Card';

function Dashboard() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/ProductAdd`;
    navigate(path);
  }
  const logout = () => {
   //window.location.reload(true)
    navigate(`/`)
  }
  return (
    <div >
      <Navbar />

      <div>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                ADMIN MENU
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>


                <NavLink exact to="/ProductAdd" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user"> product Add</CDBSidebarMenuItem>
                </NavLink>
                {/* <NavLink exact to="/ProductView" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">View Edit And Remove</CDBSidebarMenuItem>
            </NavLink> */}
                <NavLink exact to="/ProductView" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/" onClick={logout} activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">logout</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}

          </CDBSidebar>

          < Cardimage />
        </div>
      </div>

      {/* <button type="button" class="btn btn-primary" onClick={routeChange}>Add products</button> */}
      <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;