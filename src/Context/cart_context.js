import React, {useContext,  useReducer} from "react";
import axios from "axios";
import { cart_reducer } from '../reducer/cart_reducer';
import { ADD_TO_CART} from '../actions/index';


const initailState = {
    cart:[],
    total_items:0,
    total_amount:0,

};

const CartContext = React.createContext();
 
export const CartProivder = ({children}) =>{

    const [state, dispatch ]= useReducer(cart_reducer,initailState);
   

    const addTocart =(id,name,price)=>{

        dispatch({type:ADD_TO_CART, payload:{id, name, price}})

    }

    console.log('statecart',state)

    return (
        <CartContext.Provider value={{...state,addTocart}}>
             {children}

        </CartContext.Provider>
    )
}

export const UseCartContext = ()=>{
    return useContext(CartContext);
}


 