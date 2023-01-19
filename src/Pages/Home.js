import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Feed from '../Components/Feed';

import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";
import { UseCourseContext } from '../Context/course_context';


const Home =()=>{

   
    return(
        <Box p={2}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
             
            </Stack>
        </Box>
    )
}
export default Home;