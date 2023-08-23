/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { /* BrowserRouter, */ HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './global.module.css';

import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
