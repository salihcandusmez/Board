import React from 'react';
import { Container, Stack } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Board from './components/Board';
import EmptyBoard from './components/Empty';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';

function App() {
  const bookData = useSelector((state) => state.author.books);

  const renderBoards = () => {
    let boards = [];
    for (const [key, value] of Object.entries(bookData)) {
      boards.push(<Board year={key} books={value} key={key} />);
    }
    return boards;
  };

  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        {Object.keys(bookData).length !== 0 ? (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            sx={{ overflowX: 'auto', marginTop: 8 }}>
            {renderBoards()}
          </Stack>
        ) : (
          <Box>
            <EmptyBoard />
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
