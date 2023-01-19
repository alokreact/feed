import {LOAD_PRODUCTS, FILTER_PRODUCTS,ADD_TO_CART} from '../actions/index';

export const cart_reducer =(state, action)=>{

   // console.log('state',state);

    if(action.type === ADD_TO_CART){

        const {id,name,price} = action.payload;

        const tempItem = state.cart.find((i)=> i.id === id)

        if(tempItem){
            const tempCart =state.cart.map((item)=>{
             
                if(item.id === id){

                    let newPrice = parseFloat(item.price) + parseFloat(price); 

                    return {...item,price: newPrice};
                }
                else{
                    return item
                }
            })

            return {...state ,cart:tempCart};

        }
        else{

            const newItem= {
                id:id,
                name:name,
                price:price
            };

            return {...state, cart:[...state.cart,newItem]}
        }


    }
    
   return state;
   
    throw new  Error(`No matching "${action.type}" - action type`)

}