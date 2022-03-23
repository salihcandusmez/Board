import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Stack, Typography } from '@mui/material';
import BookCard from './BookCard';

export default function Board({ year, books }) {
  const [topColor, setTopColor] = React.useState('');

  React.useLayoutEffect(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setTopColor(`#${randomColor}`);
  }, []);

  const boardContent = (
    <>
      <Typography variant="h5" sx={{ color: '#707090' }} gutterBottom>
        {year}
      </Typography>
      <Stack spacing={2}>
        {books.map((val, ind) => (
          <BookCard key={`${year}_${ind}`} {...val} />
        ))}
      </Stack>
    </>
  );

  return (
    <Box
      sx={{
        minWidth: 350
      }}>
      <Card
        variant="outlined"
        sx={{ background: '#D2D7E0', border: 0, borderTop: 4, borderTopColor: topColor }}>
        <CardContent>{boardContent}</CardContent>
      </Card>
    </Box>
  );
}
