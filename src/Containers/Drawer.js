import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
        backgroundColor:'gray',
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/ProductAdd" spy={true} smooth={true}>Add Products</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/ProductView" spy={true} smooth={true}>View Products</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/orderview" spy={true} smooth={true}>View Orders</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" spy={true} smooth={true}>Logout</Link>
            </ListItemText>
          </ListItem>
      
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{color:'blue'}} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;