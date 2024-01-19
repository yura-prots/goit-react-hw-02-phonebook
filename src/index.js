import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from 'components/App';
import { GlobalStyle } from './GlobalStyle.js';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
