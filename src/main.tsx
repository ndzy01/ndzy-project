import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import './index.css';
import { withStores } from './store';

const EnhancedComponent = withStores(Layout);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <EnhancedComponent />
    </React.StrictMode>
  </BrowserRouter>,
);
