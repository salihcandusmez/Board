import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  padding: '3px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#373A3B',
  borderColor: '#373A3B',
  alignSelf: 'baseline',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: '#373A3B',
    borderColor: '#373A3B',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#373A3B',
    borderColor: '#373A3B'
  },
  '&:focus': {
    boxShadow: 'none'
  }
});

export default function SubmitButton() {
  const { t } = useTranslation();

  return (
    <CustomButton variant="contained" disableRipple>
      {t('submit')}
    </CustomButton>
  );
}
