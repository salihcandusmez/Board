import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/system';

export default function SearchBar() {
  const { t } = useTranslation();

  const [authorName] = React.useState('Lorem Board');

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2, md: 2 }}>
      <Typography variant="h4" sx={{ color: '#707090' }}>
        {authorName}
      </Typography>
      <Typography variant="body1" sx={{ paddingTop: 1.8 }}>
        {t('booksOf')}
      </Typography>
      <Box sx={{ paddingTop: 0.1 }}>
        <TextField variant="standard" />
      </Box>
      <Box sx={{ paddingTop: 1 }}>
        <SubmitButton />
      </Box>
    </Stack>
  );
}
