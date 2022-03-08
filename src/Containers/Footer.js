import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";
import {
    Security,
    Info
} from "@material-ui/icons";

const Footer = () => <>
      
        <AppBar position="static" elevation={0} component="footer" style={{backgroundColor:'#1d1e1f',
            
            //marginTop:'auto',
            width: "100%",
            height: '60px'
        }} >
            <Toolbar style={{ justifyContent: "center", height:"60px"}} >
                <Typography variant="caption" style={{justifyContent: "center"}}>©2022 Online Bag Shop</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;