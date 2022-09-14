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
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    paddingRight:'300px',
    flexGrow: "1",
    cursor: "pointer",
  
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    marginLeft: theme.spacing(7),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed"
    style={{backgroundColor:'#2f2626'}}
    >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
         Online Bag Shop
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link  to="/ProductAdd" className={classes.link} spy={true} smooth={true}>
              Add Product
            </Link>
            <Link to="/ProductView" className={classes.link} spy={true} smooth={true}>
              View products
            </Link>
            <Link to="/orderview" className={classes.link} spy={true} smooth={true}>
            View orders
            </Link>
            <Link to="/" className={classes.link} spy={true} smooth={true}>
            Logout
            </Link>
          
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;