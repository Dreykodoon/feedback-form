import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/home';
import Contact from './pages/contact';
import Layout from './components/layout';

const App = () => (
    <MuiThemeProvider>
        <Layout>
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        </Layout>
    </MuiThemeProvider>
);

export default App;
