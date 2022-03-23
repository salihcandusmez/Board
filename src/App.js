import React from 'react';
import { Container, Stack } from '@mui/material';
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
    <>
      <Header />
      <Container>
        <SearchBar />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
          sx={{ overflowX: 'auto' }}>
          {renderBoards()}
        </Stack>
      </Container>
    </>
  );
}

export default App;
