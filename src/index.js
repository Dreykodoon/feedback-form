import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';
import './style/style.scss';

injectTapEventPlugin();

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App/>, app);
