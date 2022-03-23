import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SubmitButton from './SubmitButton';
import { fetchAuthor } from '../store/actions/author.action';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const authorName = useSelector((state) => state.author.authorName);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [authorId, setAuthorId] = React.useState('');

  const handleClick = () => {
    dispatch(fetchAuthor(authorId));

    // setAuthorId('');
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2, md: 2 }}>
      <Typography variant="h4" sx={{ color: '#707090' }}>
        {authorName}
      </Typography>
      <Typography variant="body1" sx={{ paddingTop: 1.8 }}>
        {t('booksOf')}
      </Typography>
      <Box sx={{ paddingTop: 0.1 }}>
        <TextField
          variant="standard"
          value={authorId}
          onChange={(event) => setAuthorId(event.target.value)}
        />
      </Box>
      <Box sx={{ paddingTop: 1 }}>
        <SubmitButton onClick={handleClick} />
      </Box>
    </Stack>
  );
}
