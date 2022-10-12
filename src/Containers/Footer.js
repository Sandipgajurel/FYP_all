// import React from "react";
// import {
//     AppBar,

// } from "@material-ui/core";
import { Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

// const Footer = () => {
// return(
// <>
//         <AppBar
//          position="relative"
//           //elevation={0}
//            component="footer"
//          style={{
//           paddingTop:'20px',  height:'auto', background: `rgb(199,199,209)`,
//          background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)` }}
//               //backgroundImage: `linear-gradient(red, yellow, green)`

//         // style={{backgroundColor:`rgb(235, 195, 64)`,
//         //     marginTop:'auto',
//         //     width: "100%",
//         //     height: '80px'
//         // }}
//         >
//             {/* <Toolbar style={{ justifyContent: "center", height:"60px"}} >
//                 <Typography variant="caption" style={{justifyContent: "center"}}>©2022 Online Bag Shop</Typography>
//             </Toolbar> */}

// {/* <h1 style={{ color: "white",
//                    textAlign: "center",
//                    marginTop: "3px",
//                    fontSize:'25px' }}>
//        Online Bag Shop
//       </h1> */}
//       <Container  >
//         <Row >
//           <Column >
//             <Heading>Services</Heading>
//             <FooterLink href="#">All type of Bag</FooterLink>

//           </Column>

//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">9813687140</FooterLink>
//             <FooterLink href="#">9841155726</FooterLink>
//          </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>

//           <Column>
//             <Heading>Address</Heading>
//             <FooterLink href="#">Kathmandu,Nepal</FooterLink>
//           </Column>
//         </Row>
//       </Container>
//         </AppBar>
//     </>
// )
// }
// export default Footer;
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      // sx={{
      //   p: 1,
      //   m: 1,
      //   bgcolor: (theme) =>
      //     theme.palette.mode === "dark" ? "#101010" : "grey.100",
      //   color: (theme) =>
      //     theme.palette.mode === "dark" ? "grey.300" : "grey.800",
      //   border: "1px solid",
      //   borderColor: (theme) =>
      //     theme.palette.mode === "dark" ? "grey.800" : "grey.300",
      //   borderRadius: 2,
      //   fontSize: "0.875rem",
      //   fontWeight: "700",
      //   ...sx,
      // }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexWrap: "wrap",
        padding: "30px 30px",
        bgcolor: "background.paper",
        maxWidth: "auto",
        justifyContent: "space-around",
        background: `rgb(199,199,209)`,
        background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)`,
      }}
    >
      {/* <Box sx={{}}> */}
      <Item>
        <Heading>Services</Heading>
        <FooterLink href="#">All type of Bag</FooterLink>
      </Item>

      <Item>
        <Heading>Contact Us</Heading>
        <FooterLink href="#">9813687140</FooterLink>
        <br />
        <FooterLink href="#">9841155726</FooterLink>
      </Item>

      <Item>
        <Heading>Social Media</Heading>
        <FooterLink href="#">
          <i className="fab fa-facebook-f">
            <span style={{ marginLeft: "10px" }}>Facebook</span>
          </i>
        </FooterLink>
        <br />
        <FooterLink href="#">
          <i className="fab fa-instagram">
            <span style={{ marginLeft: "10px" }}>Instagram</span>
          </i>
        </FooterLink>
      </Item>

      <Item>
        <Heading>Address</Heading>
        <FooterLink href="#">Kathmandu,Nepal</FooterLink>
      </Item>
      {/* </Box> */}
    </div>
  );
}
