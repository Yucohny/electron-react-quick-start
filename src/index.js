import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const ctr = document.getElementById('root')

const root = createRoot(ctr)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)