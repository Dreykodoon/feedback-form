import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/home';
import Contact from './pages/contact';
import Layout from './components/layout';

const App = () => (
    <MuiThemeProvider>
        <Router>
            <Layout>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
);

export default App;
