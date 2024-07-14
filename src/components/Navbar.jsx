import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography ,} from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blogging App
        </Typography>
          <Button color="inherit">
          <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Button> &nbsp;&nbsp;
          <Button color="inherit">
          <Link to='/addblog' style={{textDecoration:'none', color:'white'}}>Add Blog</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
);
}

export default Navbar
