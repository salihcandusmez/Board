import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Board from './components/Board';

function App() {
  return (
    <Box sx={{ background: '#FCFCFC', height: '100vh' }}>
      <Header />
      <Container>
        <SearchBar />
        <Board />
      </Container>
    </Box>
  );
}

export default App;
