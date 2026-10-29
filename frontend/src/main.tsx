import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { routerBasename } from './basePath';

const isTest =
  typeof window !== "undefined" &&
  window.location.search.includes("test");

const Root = isTest ? (
  <BrowserRouter basename={routerBasename}>
    <App />
  </BrowserRouter>
) : (
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(Root);
