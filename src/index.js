import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import App from './app';
import './style/style.scss';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, app);
