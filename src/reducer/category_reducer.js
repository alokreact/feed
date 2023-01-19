import {GET_CATEGORY_BEGIN, GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS} from '../actions/index';

export const category_reducer =(state, action)=>{

    if(action.type === GET_CATEGORY_BEGIN){
        return { ...state, category_loading:true }
    }
    if(action.type === GET_CATEGORY_SUCCESS){
        return {...state, categories:action.payload, category_loading:false}
    }
    if(action.type === GET_CATEGORY_ERROR){

        return {...state,  category_loading:false,category_error:true}
    }

 
throw new  Error(`No matching "${action.type}" - action type`)

}