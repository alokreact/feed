import {LOAD_PRODUCTS, FILTER_PRODUCTS,UPDATE_FILTERS} from '../actions/index';

export const filter_reducer =(state, action)=>{

    //console.log('state',state);
    
    if(action.type === LOAD_PRODUCTS){
        return {...state, 
                filtered_products:[...action.payload],
                filters:{...state.filters},
                all_courses:[...action.payload]
        }
    }
    if(action.type === UPDATE_FILTERS){
        const {name , value }= action.payload;
        return {...state, filters : {...state.filters, [name]:value }}
    }

    if(action.type === FILTER_PRODUCTS){
   
        const { all_courses } = state;
        const {text, category } = state.filters;

       
        let temp_products = [...all_courses];
        temp_products =  temp_products.filter ((product)=> product.category === category )

        return {...state, filtered_products:temp_products};
       // console.log('temp_products',temp_products)
       // }

        //return {...state, filtered_products:temp_products};
      
    }
   
    throw new  Error(`No matching "${action.type}" - action type`)

}