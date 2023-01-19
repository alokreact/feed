import { UseGlobalContext } from '../Context';

import Loading from './Loading';
import Course from './CourseComponent';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Courselist =() =>{

    const{ loading , course}= UseGlobalContext();

    if(loading){

        return <Loading/>
    }
    if(course.length < 1){

        return 'No Course Found';
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {course.map((ele,index)=>{

            return (
            <Grid item xs={2} sm={4} md={4} key={index}>

                     <Course key={ele.name} {...ele} />
               
          </Grid>
            )

        }) }
          </Grid>
    </Box>
    )

}

export default Courselist;