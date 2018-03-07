import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';
import './styles/main.css';
import { BrowserRouter } from 'react-router';

render(
  <App />  
, document.getElementById('app'));