import React, {useContext, useEffect, useReducer} from "react";

import axios from "axios";

import { filter_reducer } from '../reducer/filter_reducer';
import { UseCourseContext } from '../Context/course_context';


import {FILTER_PRODUCTS,UPDATE_FILTERS, LOAD_PRODUCTS} from '../actions/index';

const initailState = {
    filtered_products:{},
    all_courses:{},
     filters:{
        text:'',
        category:'all',
    },

};

const FilterContext = React.createContext();

 
export const FilterProivder = ({children}) =>{

    const { courses  } = UseCourseContext();

    const [state, dispatch ]= useReducer(filter_reducer, initailState);

    //console.log('state',state)
    //console.log('courses',courses)

    useEffect(()=>{

      //  if(courses.length>1)

         dispatch({type:LOAD_PRODUCTS, payload: courses});

    },[courses]);

    useEffect(()=>{

        dispatch({ type:FILTER_PRODUCTS });

    },[state.filters]);



    const updateFilters =(e)=>{

        let name = 'category';
        //let value = e.target.value;
        //if(name === 'category'){
        let value = e.target.textContent;
    
        dispatch ({type:UPDATE_FILTERS, payload :{name, value} })
        
       // console.log('fired',e.target.textContent);
    }


    return (
        <FilterContext.Provider value={{...state,updateFilters}}>
             {children}

        </FilterContext.Provider>
    )
}

export const UseFilterContext = ()=>{

    return useContext(FilterContext);
}


 