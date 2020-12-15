/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import './src/assets/sass/main.scss';

import routes from './src/router/routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
