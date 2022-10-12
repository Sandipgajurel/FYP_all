import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CardHomepage from "./Products/CardHomepage";
import { Container, Input } from "@material-ui/core";
import image1 from "../img/7.jpg";
import BackToTopButton from "./ScrollTop";
import FilterByPrice from "./Products/FilterByPrice";
import TextField from '@mui/material/TextField';

//for filter dropdown
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//icon
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';

const useStyles = makeStyles((theme) => ({
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

   //for dropdown in filter
   const [filteredPrice, setFilteredPrice] = useState(0);
   const [filterType, setfilterType] = useState('');
 
   //for search
   const[inputText, setInputText] = useState('');
  
   //  console.log(filterType);
   const options = [1000, 2000, 3000, 4000, 5000, 10000];
   const typeOptions = ['small', 'medium', 'large', 'extraLarge'];  
 
//search
function handleChange(e){
setInputText(e.target.value);
} 


  const getproduct = () => {
    axios
      .get("http://localhost:3001/getproduct")

      .then((response) => {
        //console.log(response)
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div
    //style={{ margin:'0', minHeight:'100vh', width:'100%', height:'100%'}}
    >
      {/* sidebar */}
      <div style={{ backgroundColor: "#FFF7EF" }}>
        <img src={image1} alt="*" style={{ width: "100%", height: "500px" }} />
        {/* card inside sidebar */}
        <Container
          style={{
            width: "auto",
            borderRadius: "50px",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <h1 className="heading1">Featured Products</h1>
          <div className="item-container">
            {products.map((items) => (
              <CardHomepage
                key={items.productId}
                quantity={(items.quantity = 1)}
                items={items}
                handleClick={handleClick}
              />
            ))}
          </div>
           {/* search by name */}
           <h1 className="filter">Search Products <span><ManageSearchRoundedIcon style={{height:'50px', width:'50px'}} /></span></h1>
          <TextField style={{marginBottom:'30px'}} id="standard-basic" label="Seach Name" variant="standard" type="text" onChange={handleChange} ></TextField>
          <div className="item-container">
      {products.filter(function(product){
         return( product.name === inputText)
      }).map(function(product){
        return(
              <FilterByPrice
                key={product.productId}
                quantity={(product.quantity = 1)}
                items={product}
                handleClick={handleClick}
              />
            )})}
          </div>

{/* filter by price */}
<h1 className="filter">Filter Products By Price<ScreenSearchDesktopTwoToneIcon style={{height:'40px', width:'40px', marginLeft:'15px'}}  /> </h1>
<Box sx={{ minWidth: 120, maxWidth:200, marginTop:'20px', marginBottom:'20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Price"
          onChange={(e) => setFilteredPrice(e.target.value)}
            value={filteredPrice}
       >
            {options.map((value) => (
          <MenuItem value={value} key={value}>
            Upto : {value}
          </MenuItem>
         ))}
         </Select>
      </FormControl>
    </Box> 
<div className="item-container">
      {products.filter(function(product){
         return( product.price <=filteredPrice)
      }).map(function(product){
        return(
              <FilterByPrice
                key={product.productId}
                quantity={(product.quantity = 1)}
                items={product}
                handleClick={handleClick}
              />
            )})}
          </div>
          
{/* filter by type */}
<h1 className="filter">Filter Products By Type <SearchRoundedIcon style={{height:'40px', width:'40px'}}  /> </h1>
<Box sx={{ minWidth: 120, maxWidth:200,marginTop:'20px', marginBottom:'20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type-Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type-Size"
          onChange={(e) => setfilterType(e.target.value)}
            value={filterType}
       >
            {typeOptions.map((value) => (
          <MenuItem value={value} key={value}>
            Size : {value}
          </MenuItem>
         ))}
         </Select>
      </FormControl>
    </Box> 
<div className="item-container">
      {products.filter(function(product){
         return( product.type === filterType)
      }).map(function(product){
        return(
              <FilterByPrice
                key={product.productId}
                quantity={(product.quantity = 1)}
                items={product}
                handleClick={handleClick}
              />
            )})}
          </div>
        
        </Container>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default Homepage;
