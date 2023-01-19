import React, {useEffect} from 'react'
import { UseCourseContext } from '../Context/course_context';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import CourseComponent from '../Components/CourseComponent';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar  from '../Components/Sidebar';
import { Stack } from '@mui/system';
import { UseFilterContext } from '../Context/filter_context';

const Course = () => {

    const{course_loading:loading, fetchCourse, courses, course_error: error} = UseCourseContext();
    const{ filtered_products } = UseFilterContext();

 //   console.log('filtered_products',filtered_products)
 
 
    if(loading){

        return <Loading/>
    }
    if(error){

        return <Error/>
    }

 
  //  console.log('courses',courses)

    
    return (
        <>
        <Box sx={{ flexGrow: 1 , m: '3rem'}}>

        <Stack direction="row" spacing="3" justifyContent="spacBetween">
        
            <Sidebar/>

            <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           { 
           filtered_products.length>1?

            filtered_products.map((ele,index)=>{
                return (
                    <Grid item xs={2} sm={4} md={4} key={index} >
                        <CourseComponent key={ele.name} {...ele} />
                    </Grid>
                )
            })
            :    
            courses.map((ele,index)=>{
            return (
                <Grid item xs={2} sm={4} md={4} key={index} >
                    <CourseComponent key={ele.name} {...ele} />
                </Grid>
            )
            })
        }
            </Grid>
        </Stack>
        </Box>
    </>
    )
}

export default Course;