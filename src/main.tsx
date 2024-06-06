import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/style/style.scss'

const container = document.getElementById('app');
const root = createRoot(container!)

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

root.unmount();
