import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { StoreContext, rootStore } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={{ state: rootStore }}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
);
