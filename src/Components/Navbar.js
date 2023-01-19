import  React,{useState} from "react";
import Logo  from '../assets/image/logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from "react";
import { Stack } from '@mui/system';

// import AdbIcon from '@mui/icons-material/Adb';

import { UseCourseContext } from '../Context/course_context';
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";


const Navbar =()=>{
  const{course_loading:loading, fetchCourse, courses, course_error: error} = UseCourseContext();
 

  console.log('courses',courses)

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

   const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] =useState(null);

    const Search = styled("div")(({theme})=>({

      backgroundColor:"white",
      padding:"0px 10px",
     // borderRadius:theme.shape.borderRadius,
      width:'40%'

      })  
    ) 


    

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledToolBar =styled(Toolbar)({

    display:"flex",
    justifyContent:"space-between"

  })

   
    return   <AppBar position="sticky">
   
       
      <StyledToolBar>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',

           }}
        >
          LOGO
        </Typography>

    
        <Search> <InputBase placeholder="Search..."/> </Search>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </StyledToolBar>
    
  </AppBar>


}

export default Navbar;


 