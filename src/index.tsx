import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import { queryClient } from './api';

import { theme } from './theme';
import './theme/css/base.css';
import './theme/css/utilities.css';

ReactDOM.render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
