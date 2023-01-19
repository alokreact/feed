import React, {useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {category_reducer} from '../reducer/category_reducer';
import {GET_CATEGORY_BEGIN,GET_CATEGORY_SUCCESS} from '../actions/index';


const initialState = {
    category_loading:false,
    category_error:false,
    categories:[],
};

const CategoryContext = React.createContext();

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNGYzN2MxNmRkMTY3ZGExNzUyMGI5MmI4MGYzY2Q3MTEwZTI3M2RkZWRjZjFhNTFlMWRiYTBiZWE1YjhmZTExNzgwOWRkNTIzMWIzOWIwMTgiLCJpYXQiOjE2NzM4NTg0MzEsIm5iZiI6MTY3Mzg1ODQzMSwiZXhwIjoxNjczODYyMDMxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Q5FpCNjitevqCjuqKVbOQJ1xjjxBtheu_F6trY4i6syhdsps44G58cRBwKThO12vjxOCg05UQYiUILQ_hqh5OPZzX1w2UkvuY0UutgvQQ2sN20XTf4cnkCuPaQOUgfEYHY1MG3YRIRTx_OgxIbXGs_orTS_vRh2jp9YSRIFnE-BLpscm2YnvMsxyis7awGiRI5KBBJuW7Lr_xKIeZ5SdOByXeIsD1VerX_z8eFnr1FqWGtb5wLB6nLyLY0jzcrEb2hvFanHnT1MxB_GlMvDWK79JCiHy6skHJZnmiMJjf-pAfK27G2OU1OIXXQFHdOwaT5PNUopalt_FHAMOyroS4PHjKQFyO6Tjz_K4XN8c5jqPnaaJ2lWzyCMJ3TWZ1KiKd4mgZyq0NZL2qnZTOrjsJyWFc7nNBY1H9WR1oi7YbsN0sYPXay5iVYk9cwtn801eOd4hrPDYFgkfBjgtang136EniwH-TZTAEQ_0VfBYw1NSNBeUPElBcgFLgtpbT5EiRIaZwzPfPbcB-AQP8vjvAqTvsCn-h-fhy8O2PoTI-ZYAbnzATPj2DBJfYEbPJoMmTd8hKwbYWObxA370td4k42ye6Hnd2D5f35ij_69GyXxWSfUVsBoHBQqL4A0ARHmkLh0vINa_8j_uuYXOAAIs49iTcLQ5wf8T61EPiy5Av1Q";

const axiosConfig = {
headers: {
  Authorization: `Bearer ${token}`,}
};

export const CategoryProivder = ({children}) =>{

    const [state, dispatch ]= useReducer(category_reducer, initialState)

    const fetchCategory = async ()=>{

        dispatch({type:GET_CATEGORY_BEGIN})

        try{
            const response = await axios.get("http://localhost/elearn/elearn/api/v1/category", axiosConfig);

            dispatch({type:GET_CATEGORY_SUCCESS, payload:response.data});

            console.log(response);
        }
        catch(error){}
    }

  

    return (

        <CategoryContext.Provider value={{ ...state, fetchCategory }}>

             {children}
        </CategoryContext.Provider>
    )
}

export const UseCategoryContext = ()=>{

    return useContext(CategoryContext);
}


 