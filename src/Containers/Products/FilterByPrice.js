import React from "react";
import { Card, Row } from "react-bootstrap";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./homepage.css";
//for grid of name and price
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

//for grid of name and price
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterByPrice = ({ items, handleClick }) => {
  //add value of quantity = 1 remain
  let { name, description, quantity, price, type, image, productId } = items;

  return (
    <div>
      <div>
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <div>
                <div className="item-container">

                  <Card
                    className="shadow-md m2 p3 rounded"
                    style={{
                      width: "auto",
                    //   background: `rgb(64,64,113)`,
                    //   background: `radial-gradient(circle, rgba(64,64,113,1) 0%, rgba(20,20,20,1) 100%)`,

                    backgroundColor:'white',
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`
                    }}
                  >
                    <CardActionArea>
                      {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                      <img src={`http://localhost:3001/${image} `} alt="" />
                      {/* <h3 style={{ color: "silver", fontStyle: "italic" }}>
                        {name}
                      </h3>
                      <h4 style={{ color: "silver" }}>Price : {price}</h4> */}

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1} sx={{ marginTop: "0px" }}>
                          <Grid item xs={12}>
                            <Item>
                              <h4
                                style={{
                                  fontWeight: "bold",
                                  color: "black",
                                  fontStyle: "italic",
                                }}
                              >
                                Name: {name}
                              </h4>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
                      <h5 style={{ fontWeight: "bold", color: "black" }}>
                        {" "}
                        <AttachMoneyIcon />
                        {price}
                      </h5>
                      <p >{description}</p>
                      <p >Type : {type}</p>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        className="btn-grad"
                        onClick={() => handleClick(items)}
                      >
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>

                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default FilterByPrice;
