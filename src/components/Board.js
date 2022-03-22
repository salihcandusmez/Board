import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

export default function Board() {
  const [topColor, setTopColor] = React.useState('');
  const [boardTitle, setBoardTitle] = React.useState('');

  React.useLayoutEffect(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setTopColor(`#${randomColor}`);
  }, []);

  React.useEffect(() => {
    setBoardTitle('1975');
  }, []);

  const card = (
    <>
      <Typography variant="h5" sx={{ color: '#707090' }} gutterBottom>
        {boardTitle}
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        marginTop: 8
      }}>
      <Card
        variant="outlined"
        sx={{ background: '#D2D7E0', border: 0, borderTop: 4, borderTopColor: topColor }}>
        <CardContent>{card}</CardContent>
      </Card>
    </Box>
  );
}
