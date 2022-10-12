import React from "react";
import Card from "@mui/material/Card";
import {CardActionArea } from "@mui/material";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

//for dropdiwn
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterItem = () => {
  const [products, setProducts] = useState([]);
  const [productWithId, setProductWithId] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  
  //for dropdown in filter
  const [filteredPrice, setFilteredPrice] = useState(0);
  const [filterType, setfilterType] = useState('');

  console.log(filterType);
  const options = [1000, 2000, 3000, 4000, 5000, 10000];
  const typeOptions = ['small', 'medium', 'large', 'extraLarge'];  


  const { productId } = useParams();
  const productDetail = (req, res, next) => {
    //const id = req.params.productId;
    //const id = products.map(datas => (datas.productId))
    axios
      .get(`http://localhost:3001/getproductwithid/${productId}`)
      .then((response) => {
        setProductWithId(response.data);
        console.log(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setType(response.data.type);
        setImage(response.data.image);
      });
  };

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
    <>
      <div style={{ }}>
        <div style={{ padding:'10px 15px 10px 15px', margin:'50px 0px', display:'flex', justifyContent:'center' }}>
          <div>
            <h1 style={{fontStyle:'italic', fontWeight:'bold', color:'black'}}>Filter Products by Price
            </h1>
            {/* filter by price */}
            <Box sx={{ minWidth: 120, maxWidth:200, margin:'10px 0px 10px 0px' }}>
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
            {value}
          </MenuItem>
         ))}
         </Select>
      </FormControl>
    </Box> 
    
    <div className="item-container">
         {products.filter(function(product) {
        return( product.price <=filteredPrice)
    }).map(function(product){
        return(
                <Card
                  key={product.productId}
                  className="shadow-md m2 p3 rounded"
                  style={{
                    width: "270px",
                    background: `rgb(64,64,113)`,
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,

                    background: `radial-gradient(circle, rgba(64,64,113,1) 0%, rgba(20,20,20,1) 100%)`,
                  }}
                >
                  <CardActionArea style={{ alignItems: "center" }}>
                    {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                    <img
                      style={{ width: "270px" }}
                      src={`http://localhost:3001/${product.image} `}
                      alt=""
                    />
                    <div style={{ textAlign: "center" }}>
                      <h3
                        style={{
                          backgroundColor: "black",
                          fontStyle: "italic",
                          color: "whitesmoke",
                        }}
                      >
                        {product.name}
                      </h3>
                      <h4 style={{ color: "white" }}>
                        Price : {product.price}
                      </h4>
                      <p style={{ color: "white" }}>
                        description: {product.description}
                      </p>
                      <p style={{ color: "white" }}>Type : {product.type}</p>
                    </div>
                  </CardActionArea>
                </Card>)
                    })}
            </div>

            {/* filter by type */}
            <h1 style={{fontStyle:'italic', fontWeight:'bold', color:'black', marginTop:'50px'}}>Filter Products by Price
            </h1>
    <Box sx={{ minWidth: 120, maxWidth:200, margin:'10px 0px 10px 0px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type-Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type-size"
          onChange={(e) => setfilterType(e.target.value)}
            value={filterType}
       >
            {typeOptions.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
         ))}
         </Select>
      </FormControl>
    </Box> 

    <div className="item-container">
         {products.filter(function(product) {
        return( product.type === filterType)
    }).map(function(product){
        return(
                <Card
                  key={product.productId}
                  className="shadow-md m2 p3 rounded"
                  style={{
                    width: "270px",
                    background: `rgb(64,64,113)`,
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,

                    background: `radial-gradient(circle, rgba(64,64,113,1) 0%, rgba(20,20,20,1) 100%)`,
                  }}
                >
                  <CardActionArea style={{ alignItems: "center" }}>
                    {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                    <img
                      style={{ width: "270px" }}
                      src={`http://localhost:3001/${product.image} `}
                      alt=""
                    />
                    <div style={{ textAlign: "center" }}>
                      <h3
                        style={{
                          backgroundColor: "black",
                          fontStyle: "italic",
                          color: "whitesmoke",
                        }}
                      >
                        {product.name}
                      </h3>
                      <h4 style={{ color: "white" }}>
                        Price : {product.price}
                      </h4>
                      <p style={{ color: "white" }}>
                        description: {product.description}
                      </p>
                      <p style={{ color: "white" }}>Type : {product.type}</p>
                    </div>
                  </CardActionArea>
                </Card>)
                    })}
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
export default FilterItem;
