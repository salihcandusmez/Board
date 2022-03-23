import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Board from './components/Board';
import { useSelector } from 'react-redux';

function App() {
  const bookData = useSelector((state) => state.author.books);

  const renderBoards = () => {
    let boards = [];
    for (const [key, value] of Object.entries(bookData)) {
      boards.push(<Board year={key} books={value} />);
    }
    return boards;
  };

  return (
    <Box sx={{ background: '#FCFCFC', height: '100vh' }}>
      <Header />
      <Container>
        <SearchBar />
        {renderBoards()}
      </Container>
    </Box>
  );
}

export default App;
