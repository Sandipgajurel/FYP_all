import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cardimage = () => {
  const [products, setProducts] = useState([]);
  //const [image, setImage] = useState('');
  const getproduct= () =>{
    axios
    .get('http://localhost:3001/getproduct')
  
    .then(response =>{
      console.log(response)
      setProducts(response.data)
      // setImage(response.data.image)
      // console.log(response.image);
     
    })
    .catch(err =>{
      console.log(err)
    })  
  
  }
  
  
  useEffect(() =>{
    getproduct();
   },[])


// const [products, setProducts] = useState([]);
// const [name, setName] = useState("")
// const [description, setDescription] = useState("")
// const [price, setPrice] = useState("")
// const [type, setType] = useState("")
// const [image, setImage] = useState("")

// const { productId } = useParams();

// useEffect(() =>{
//   const getproduct = async () =>{
//  const { data } = await  axios
//     .get(`http://localhost:3001/getproductwithid/${productId}`)
 
//    console.log(data)
//    setProducts(data);
//    setName(data.products.name)
//    setDescription(data.products.description)
//    setPrice(data.products.price)
//    setType(data.products.type)
//    setImage(data.products.image)
   
//    //setProductId(response.data[0].productId)
 
  // }
  // getproduct()
   
  //  },[productId])
  return (
   <>

   
 <div style={{display:'flex', flexDirection:'row'}}>
<div style={{paddingLeft:'20px',paddingRight:'20px'}}>
    {/* {products.map((product) =>{
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          src={product.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Name: {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Price: {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
   
})} */}
  <div>
      <h1>Featured Products</h1>
      <div className='item-container' >
        {products.map((product) => (
          <Card className='shadow-md m2 p3 rounded'>
             <CardActionArea>
            {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
            <img src={`http://localhost:3001/${product.image} `} alt='' />
            <h3>{product.name}</h3>
            <h4>Price : {product.price}</h4>
            <p>{product.description}</p>
            <p>Type : {product.type}</p>
            </CardActionArea>
            <CardActions>
        <Button size="small" color="primary">
          View Items
        </Button>
      </CardActions>
          </Card>
        ))}
      </div>
    </div>

</div>
    </div>
    </>
  );
}
export default Cardimage