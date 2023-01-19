import * as React from 'react';
import Button from '@mui/material/Button';

import { UseCartContext } from '../Context/cart_context'

  

const AddToCart =({id,name,price})=>{

    const {addTocart}= UseCartContext();

    return (

        <Button variant="contained" color="success" href="#outlined-buttons" size="small" onClick={()=>addTocart(id,name,price)}>
                 Add To Cart
        </Button>

    )


}

export default AddToCart;