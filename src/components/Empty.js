import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import noBoardImage from '../assets/empty-state-image.png';

export default function EmptyBoard() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img src={noBoardImage} alt={t('noBoard')} width="232" height="269" />

      <Typography variant="h5" component="div" sx={{ marginTop: 5 }}>
        {t('noBoard')}
      </Typography>
    </Box>
  );
}
