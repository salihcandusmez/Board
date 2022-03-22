import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Box sx={{ background: '#FCFCFC', height: '100vh' }}>
      <Header />
      <Container>
        <SearchBar />
      </Container>
    </Box>
  );
}

export default App;
