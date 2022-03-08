import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'
const Cardimage = () => {

//   let result = await fetch("http://localhost:3001/product",{
//   method:"POST",
//   body:JSON.stringify(item),
//   headers:{
//     "Content-Type":"application/json",
//     "Accept":"application/json"
//   }
// })
// result = await result.json()
// // alert("User has been added sucessfully");

  return (
      
 <div style={{display:'flex', flexDirection:'row'}}>
<div style={{paddingLeft:'20px',paddingRight:'20px'}}>
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={image2}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Camera Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The style that most people think of when they hear "camera bag" is the traditional camera shoulder bag also referred to as a messenger bag.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>



    <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={image2}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Camera Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The style that most people think of when they hear "camera bag" is the traditional camera shoulder bag also referred to as a messenger bag.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>

    <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={image2}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Camera Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The style that most people think of when they hear "camera bag" is the traditional camera shoulder bag also referred to as a messenger bag.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>

    </Card>

    </div>

    </div>
  )
}

export default Cardimage