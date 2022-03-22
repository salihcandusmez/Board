import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo@2x.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F4F4F4', boxShadow: 0, marginBottom: 9 }}>
        <Toolbar variant="regular" sx={{ justifyContent: 'center' }}>
          <img src={logo} alt="Logo" width={113} height={34} />;
        </Toolbar>
      </AppBar>
    </Box>
  );
}
