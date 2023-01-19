import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
 import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';

import { UseFilterContext} from '../Context/filter_context';

import{ getUniquevalues } from '../utils/helper';

 
const Sidebar = () =>{

  const {filters: {category}, filtered_products , all_courses, updateFilters } = UseFilterContext();

  
  const categories  = all_courses.length>1 ? getUniquevalues(all_courses, 'category'):[];

  console.log('filtered_products',categories)

 
    return (
    
      <Box bgcolor="lightcoral" flex="2" p={2}>
    
       <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={updateFilters} name='category' style={{color: category === text?'red':'#000' }}>
               <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
    )
}


  export default Sidebar;
