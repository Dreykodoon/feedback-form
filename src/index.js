import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app';
import './style/style.scss';

// Protection measure against directly spamming resources.
axios({method: 'post', url: '/resources/cookie'});

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App/>, app);
