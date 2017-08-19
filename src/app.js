import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/layout';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path='/home' component={Home}/>
                <Redirect to='/home'/>
            </Switch>
        </Layout>
    </Router>
);

export default App;
