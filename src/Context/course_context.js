import React, {useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {course_reducer} from '../reducer/course_reducer';
import {GET_COURSE_BEGIN,GET_COURSE_SUCCESS,GET_COURSE_ERROR} from '../actions/index';


const initialState = {
    course_loading:true,
    course_error:false,
    courses:[],

};

const CourseContext = React.createContext();

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNThkM2M1MTgzMGRkMTcwNjdkOGZmZWVjYTFmZDdjNDg4MmMyYTc5NjNmNmMxMzIwNzRhNzcwZGJkMzlhNTE2ZDhiYWEzMGJlOTU4N2YxNWEiLCJpYXQiOjE2NzQxMDczMjUsIm5iZiI6MTY3NDEwNzMyNSwiZXhwIjoxNjc0MTc5MzI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.OxqrzpfAJPLzcBRICVLk-RSlwrpqKDlen3l7nHLCA4KczckNKl-949wja98zfEVsQffeyPkKpfQQFwlQL_1fGBEa3gjHR0qcDUGRTTQfib6YnG6-0z89Po4o1BTWH6KRnix-_jx0mErlOpPBktldgVXZSKXU_SxfWugec_DP7DXcHpBmmXw2AyACRAsVt9S6RpiXU7lZoP8-tEwe9KFqA8Gf2qSHjChcwuiVFEaAiF-3s19YBSGBzlE_Q-IPIzgNVioCA04K81piPEMJ8Eyf4RFA4jI03s9W15-w_k2Ry3TUze8I2u-cslqUbkWmnfo0Z3MsPD5QvASaiKGYZWrv1PlQEDYCgDzG7IwVtmvCDY6y76-1anI9r7PhHeYJodlK6-YUvXN72ULqKla7K5f0OFTAPEmk6pDYClJW9NQpDaWoNgEsGA85vgk5n_Pgn04HQdSq3x_HxmLewr6fMa66xpopQo4mNQDgWr_0tN0pK9jW0hgsaunW7pdq5uTfr3vVwnMWYdifOKrpQaQP8tNt2R9rZWFs2kVFYVuIUABwQsCqWsu1ToSCoIeDo1FZHji2JBFgG8VSLQQcz7DkX7MwRgpREqo6WhNmLDYBEpwiGX9MKgnodHWWWO6KDlvcoKpDDM-CEo0S5cKr43PEmZhOEp_j6Ps1g68wdMyNx5nsNg0";

const axiosConfig = {
headers: {
  Authorization: `Bearer ${token}`,}
};

export const CourseProivder = ({children}) =>{

    const [state, dispatch ]= useReducer(course_reducer, initialState)

    const fetchCourse = async ()=>{

        dispatch({type:GET_COURSE_BEGIN})
        try{

            const response = await axios.get("http://localhost/elearn/elearn/api/v1/course", axiosConfig);
            dispatch({type:GET_COURSE_SUCCESS, payload: response.data.data});

         }
        catch(error){

            dispatch({type:GET_COURSE_ERROR})
        }
    }

    useEffect(()=>{
        
        fetchCourse();

   },[])//



//console.log('state',state)

    return (
        <CourseContext.Provider value={{...state,fetchCourse}}>
             {children}
        </CourseContext.Provider>
    )
}

export const UseCourseContext = ()=>{

    return useContext(CourseContext);
}


 