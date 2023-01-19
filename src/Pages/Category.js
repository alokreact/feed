import React, {useEffect} from 'react'

import { UseCategoryContext } from '../Context/category_context';
import Loading from '../Components/Loading';

const Category = () => {

    const{ category_loading : loading , fetchCategory, categories } = UseCategoryContext();

     
        useEffect(()=>{

            fetchCategory();
    },[])


     if(loading){

        return <Loading/>
    }


    return (
        <></>
    )
}

export default Category;