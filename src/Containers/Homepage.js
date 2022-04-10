import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router'
import axios from 'axios';
import CardHomepage from './Products/CardHomepage';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Homepage({ handleClick, setShow }) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);


    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }


    const getproduct = () => {
        axios
            .get('http://localhost:3001/getproduct')

            .then(response => {
                //console.log(response)
                setProducts(response.data)

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getproduct();
    }, [])

    return (
        <div
        //style={{ margin:'0', minHeight:'100vh', width:'100%', height:'100%'}}
        >


            {/* sidebar */}
            <div>
                <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
                    <CDBSidebar textColor="#fff" backgroundColor="#333">
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                Menu
                            </a>
                        </CDBSidebarHeader>

                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                <NavLink exact to="/producttouser" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
                                </NavLink>
                                {/* <NavLink exact to="" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table" onClick={() => setShow(false)} >Your Cart</CDBSidebarMenuItem>
                                </NavLink> */}
                                <NavLink exact to="/profile" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                                </NavLink>


                                <NavLink exact to="/userlogin" onClick={logout} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="chart-line">logout</CDBSidebarMenuItem>
                                </NavLink>

                                <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>


                    </CDBSidebar>

                    {/* card inside sidebar */}
                    <Container style={{ width: '100%', whiteSpace: 'nowrap', overflowX: 'scroll', alignItems: 'center' }}>
                        <h1 >Featured Products</h1>
                        <section style={{ display: 'flex', flexDirection: 'row', width: '100vh' }} >

                            {products.map((items) => (
                                <CardHomepage key={items.productId} quantity={items.quantity = 1} items={items} handleClick={handleClick} />
                            ))}


                        </section>
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Homepage;