import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Typography, Stack, CircularProgress } from '@mui/material';
import { fetchAuthor } from '../store/actions/author.action';
import SubmitButton from './SubmitButton';

export default function SearchBar() {
  const authorName = useSelector((state) => state.author.authorName);
  const loading = useSelector((state) => state.author.loading);

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
        {authorName || '...'}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 3.2 }}>
        {t('booksOf')}
      </Typography>
      <TextField
        variant="standard"
        value={authorId}
        onChange={(event) => setAuthorId(event.target.value)}
      />
      <Stack direction={{ xs: 'row' }} spacing={1}>
        <SubmitButton onClick={handleClick} />
        {loading && (
          <>
            <CircularProgress size={30} color="inherit" />
            <Typography variant="subtitle2" sx={{ lineHeight: 3.3 }}>
              {t('loading')}
            </Typography>
          </>
        )}
      </Stack>
    </Stack>
  );
}
