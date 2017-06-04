import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './pages/home';

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
    <Home/>
</Provider>, app);
