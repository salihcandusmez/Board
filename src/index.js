import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/localization';
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './App';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
