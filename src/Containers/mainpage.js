import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Icon } from "@iconify/react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router";
import image1 from "../img/7.jpg";
import Cardimage from "./Card";
import Footer from "./Footer";
import { Container } from "@material-ui/core";
import image from "../img/download (4).jpg";
import image3 from "../img/download (6).jpg";
import image4 from "../img/school.jpg";
import home from "../img/home2.jpg";
import BackToTopButton from "./ScrollTop";
import { borderRadius } from "@mui/system";

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder} from 'react-animated-text-builders'


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainPage = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const routetouserlogin = () => {
    let path = `/userlogin`;
    navigate(path);
  };
  const routetoadminlogin = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div>
      <>
        <AppBar
          position="fixed"
          style={{
            background: `rgb(199,199,209)`,
            background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)`,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ textAlign: "left", fontSize: "25px" }}
            >
              Online Bag Shop
            </Typography>
            <a href="www.facebook.com">
              <Icon
                icon="mdi:facebook"
                style={{
                  paddingLeft: "10px",
                  enableBackground: "new 0 0 24 24",
                  height: "35",
                  viewBox: "0 0 24 24",
                  width: "35",
                }}
              />
            </a>
            <a href="www.instragram.com">
              <Icon
                icon="mdi:instagram"
                style={{
                  paddingLeft: "10px",
                  enableBackground: "new 0 0 24 24",
                  height: "35",
                  viewBox: "0 0 24 24",
                  width: "35",
                }}
              />
            </a>

            {/* shopping cart */}
            <Badge color="secondary">
              <ShoppingCartIcon
                style={{
                  paddingLeft: "10px",
                  enableBackground: "new 0 0 24 24",
                  height: "35",
                  viewBox: "0 0 24 24",
                  width: "35",
                }}
              />{" "}
            </Badge>
            <Select
              label="Login"
              style={{ marginLeft: "20px" }}
              IconComponent={() => (
                <PersonIcon
                  style={{
                    color: "white",
                    enableBackground: "new 0 0 24 24",
                    height: "45",
                    viewBox: "0 0 24 24",
                    width: "35",
                  }}
                />
              )}
            >
              <MenuItem onClick={routetoadminlogin}>Admin Login</MenuItem>
              <MenuItem onClick={routetouserlogin}>User Login</MenuItem>
            </Select>
          </Toolbar>
          {/* <ModalDialog open={open} handleClose={handleClose} /> */}
        </AppBar>
      </>
      <img src={image1} alt="*" style={{ width: '100%', height: '500px',marginTop:'40px' }} />

    
      <div className="row"
        style={{
          backgroundColor: "black",
          width:'100%',
          height: "600px",
          margin:'0',
          //paddingInline:'10px'
        }}
      >
       
          <div style={{ 
                         background: `rgb(9,9,82)`,
                         background: `linear-gradient(90deg, rgba(9,9,82,1) 46%, rgba(41,38,71,1) 100%)`,
                        marginTop:'50px',
                        //borderBottomLeftRadius:'30%',
                        borderBottomRightRadius:'30%',
                        //borderTopLeftRadius:'30%',
                        borderTopRightRadius:'30%',
                        
                        
            float: "left", width: "50%" }} className="column"> 
          {/* <BlinkingCursorTextBuilder
      textStyle={{
        fontWeight :"bold", fontStyle: "italic", fontSize : "40px"}}
      style={{
        position: 'static',
        top: '50%',
         marginTop:"150px", marginBottom :"10px"}}
      cursorComponent={<div style={{ 
        background: `-webkit-linear-gradient(to right, #9e0000, #fbd23c)`,
  background: `linear-gradient(to right, #9e0000, #fbd23c)`,
  
    webkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
fontStyle: "italic"}}> What We  Are providing :</div>}
      blinkTimeAfterFinish={1}
      > 
       </BlinkingCursorTextBuilder> */}

       <h1    style={{
        position: 'static',
        top: '50%',
         marginTop:"140px", marginBottom :"10px",
         background: `-webkit-linear-gradient(to right, #9e0000, #fbd23c)`,
  background: `linear-gradient(to right, #9e0000, #fbd23c)`,
  
    webkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight:'bold',
fontStyle: "italic", fontSize:'55px'}}  > We Are Providing </h1>
       <div style={{ marginRight:'50%', fontWeight:'bold', marginLeft:'50%', fontSize:'20px'}}>
          <ul style={{color:'white'}}>
          <li>Easy Shopping </li>
          <li>Quality Products </li>
          <li>Attractive Discounts</li>
          </ul>
          </div> 
           </div>
          <div style={{

            marginTop:'150px', height:'300px', float: "left", width: "50%", }} className="column">
            <img
        src={home}
        alt="*"
        style={{  width:"100%", height: "300px", borderRadius:"30px" }}
      />

      </div>
    
      </div>

      <div
        style={{
          backgroundColor: "black",
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap:'wrap', width:'auto'
        }}
      >
        {/* <h1
          style={{ color: "Highlight", fontStyle: "italic", marginTop: "5vh" }}
        >
          All Types Of Bags Are Available Here.
        </h1> */}

<BlinkingCursorTextBuilder
      textStyle={{
        background: `-webkit-linear-gradient(to right, #bd0000, #0637cb)`,
        background: `linear-gradient(to right, #bd0000, #0637cb)`,
        webkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',

        fontWeight :"bold",  fontStyle: "italic", fontSize : "40px"}}
      style={{transform: "rotate(0deg)", marginTop:"20px", marginRight:'5px', marginLeft:'5px', marginBottom :"5px"}}
      //cursorComponent={<div style={{color: "Highlight", fontStyle: "italic"}}> Easy to use!</div>}
      //blinkTimeAfterFinish={0}
      > All Types Of Bags Are Available Here. </BlinkingCursorTextBuilder>



        <Container
          style={{
            //display:'flex', flexWrap:'wrap', width:'auto', flexDirection:'row' ,
            // width: 'auto', background: `rgb(64,64,113)`,
            // background: `linear-gradient(90deg, rgba(64,64,113,1) 0%, rgba(93,92,92,1) 100%)`,
            background: `rgb(67,67,139)`,
            background: `linear-gradient(90deg, rgba(67,67,139,1) 51%, rgba(36,33,33,1) 100%)`,
            alignItems: "center",
            borderRadius: "30px",
            width:'100%',
            marginRight: "10px",
            marginLeft:'10px',
            //marginTop:'15px',
            //marginBottom:'10px',
            paddingBottom: "15px",
            //   ,
            //   width: 'auto',
            //   height: '100',
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col">
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  {" "}
                  Our services
                </h1>

                <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      paddingTop: "10px",
                      color: "Highlight",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {" "}
                    MOVIE CAMERA BAGS
                  </h3>
                  <h4
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontStyle: "italic",
                    }}
                  >
                    It is suitable for movie camera and lens.{" "}
                  </h4>
                  <h5 style={{ textAlign: "center", color: "black" }}>
                    Price:5000-20000
                  </h5>
                </div>

                {/* <div>
     <h3 style={{textAlign:'center', marginTop:'20px', paddingTop:'100px'}}> MEDIUM CAMERA BAG </h3>
     <h4>It is good for medium size camera and there are seafty for lens.</h4>
    </div> */}

                <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "40px",
                      paddingTop: "35px",
                      color: "Highlight",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {" "}
                    DSLR CAMERA BAGS
                  </h3>
                  <h4
                    style={{
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    This bag is good for DSLR camera and lens.
                  </h4>
                  <h5 style={{ textAlign: "center", color: "black" }}>
                    Price:5000-10000
                  </h5>
                </div>

                <div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "40px",
                      paddingTop: "35px",
                      color: "Highlight",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {" "}
                    SCHOOL AND TRAVEL BAGS{" "}
                  </h3>
                  <h4
                    style={{
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    This bags can be used for school, college and travel
                    purpose.
                  </h4>
                  <h5 style={{ textAlign: "center", color: "black" }}>
                    Price:1000-5000
                  </h5>
                </div>
              </div>

              <div class="col">
                <div
                  style={{
                    marginTop: "40px",
                    paddingTop: "30px",
                    paddingLeft: "200px",
                  }}
                >
                  <img
                    style={{ width: "170px", height: "200px" }}
                    src={image}
                    alt=""
                  />
                </div>
                <div style={{ paddingTop: "10px", paddingLeft: "200px" }}>
                  <img
                    style={{ width: "170px", height: "200px" }}
                    src={image3}
                    alt=""
                  />
                </div>
                <div style={{ paddingTop: "10px", paddingLeft: "200px" }}>
                  <img
                    style={{ width: "170px", height: "210px" }}
                    src={image4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          // background: `rgb(0,0,80)`,
          // background: `linear-gradient(90deg, rgba(0,0,80,1) 0%, rgba(50,32,32,1) 100%)`,
          backgroundColor: "black",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* <h1 style={{ color: "white", fontStyle: "italic" }}>
          Available Products
        </h1> */}

        <BlinkingCursorTextBuilder
      textStyle={{
        fontWeight :"bold", fontStyle: "italic", fontSize : "40px"}}
      style={{
        position: 'static',
        top: '50%',
         marginTop:"10px", marginBottom :"10px"}}
      cursorComponent={<div style={{ 
        background: `-webkit-linear-gradient(to right, #9e0000, #fbd23c)`,
  background: `linear-gradient(to right, #9e0000, #fbd23c)`,
  
    webkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
fontStyle: "italic"}}> Available Products</div>}
      blinkTimeAfterFinish={1}
      > 
       </BlinkingCursorTextBuilder>
        <Cardimage />
      </div>
      <div>
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
