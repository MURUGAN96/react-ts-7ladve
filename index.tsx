import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BirdProvider from './App.tsx';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BirdProvider>
      <App />
    </BirdProvider>
  </StrictMode>
);
