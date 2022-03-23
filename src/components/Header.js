import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo@2x.png';
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

export default function ButtonAppBar() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === 'tr') {
      i18n.changeLanguage('en-Us');
    } else {
      i18n.changeLanguage('tr');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F4F4F4', boxShadow: 0, marginBottom: 9 }}>
        <Toolbar variant="regular">
          <Box sx={{ display: 'flex' }} justifyContent="center" flex={2}>
            <img src={logo} alt="Logo" width={113} height={34} />
          </Box>
          <IconButton size="large" onClick={changeLanguage} sx={{ ml: 'auto' }}>
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
