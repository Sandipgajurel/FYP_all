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
  const [productWithId, setProductWithId] = useState([]);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState("")


  const { productId } = useParams();
  const productDetail = (req, res, next) => {
    //const id = req.params.productId;
    //const id = products.map(datas => (datas.productId))
    axios
      .get(`http://localhost:3001/getproductwithid/${productId}`)
      .then(response => {
        setProductWithId(response.data);
        console.log(response.data)
        setName(response.data.name)
        setDescription(response.data.description)
        setPrice(response.data.price)
        setType(response.data.type)
        setImage(response.data.image)
      })
  }

  const getproduct = () => {
    axios
      .get('http://localhost:3001/getproduct')

      .then(response => {
        //console.log(response)
        setProducts(response.data)

      })
      .catch(err => {
        console.log(err)
      })

  }


  useEffect(() => {
    getproduct();
  }, [])


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


      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div>
            <h1>Featured Products</h1>
            <div className='item-container' >
              {products.map((product) => (
                <Card key={product.productId} className='shadow-md m2 p3 rounded'>
                  <CardActionArea>
                    {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                    <img src={`http://localhost:3001/${product.image} `} alt='' />
                    <h3>{product.name}</h3>
                    <h4>Price : {product.price}</h4>
                    <p>{product.description}</p>
                    <p>Type : {product.type}</p>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>

                  </CardActions> */}
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