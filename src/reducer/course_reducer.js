import {GET_COURSE_BEGIN,GET_COURSE_SUCCESS,GET_COURSE_ERROR} from '../actions/index';

export const course_reducer =(state, action)=>{

    if(action.type === GET_COURSE_BEGIN){
        return {...state, course_loading:true}
    }
    if(action.type === GET_COURSE_SUCCESS){

        return {...state, courses:action.payload, course_loading:false}
    }

    if(action.type === GET_COURSE_ERROR){

        return {...state, courses:action.payload, course_loading:false, course_error:true}
    }


 
throw new  Error(`No matching "${action.type}" - action type`)

}