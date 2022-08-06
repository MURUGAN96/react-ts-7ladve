import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BirdProvider from './App.tsx';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BirdProvider>
        <App />
      </BirdProvider>
    </BrowserRouter>
  </StrictMode>
);
