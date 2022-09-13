import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";



function Navbar() {
 
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          DASHBOARD
          
        </Typography>
        
          <div >
            <Link to="/" >
              Home
            </Link>
            <Link to="/about" >
              About
            </Link>
            <Link to="/contact" >
              Contact
            </Link>
            <Link to="/faq" >
              FAQ
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;