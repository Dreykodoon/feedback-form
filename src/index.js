import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Home from './pages/home';
import Contact from './pages/contact';
import './style/style.scss';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
</Provider>, app);
