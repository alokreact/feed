import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 
import bcak from "../assets/image/back.png";

import AddToCart from './AddToCart';



const CourseComponent=({id,name, price, description})=> {
  return (
    
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="194"
        image={bcak}
        alt="Paella dish"
      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          Price - ${price}
        </Button>

        <AddToCart price={price} id={id} name={name}/>
     
      </CardActions>
    </Card>
  );
}

export default CourseComponent;