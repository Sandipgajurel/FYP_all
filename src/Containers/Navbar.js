import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import css from './navbar.css'
//import ModalDialog from './ModalDialog';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#a3780a' }} >

        <Toolbar>

          <Typography variant="h6" className={classes.title} style={{ textAlign: 'left', fontSize: '25px' }}>
            Online Bag Shop
          </Typography>
          <a href="www.facebook.com">
            <Icon icon="mdi:facebook" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
          </a>
          <a href="www.instragram.com">
            <Icon icon="mdi:instagram" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
          </a>

          {/* shopping cart */}
          <Badge color="secondary" >
            <ShoppingCartIcon style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }}
            />{" "}
          </Badge>

        </Toolbar>
        {/* <ModalDialog open={open} handleClose={handleClose} /> */}
      </AppBar>
    </>
  );
}
export default Navbar;