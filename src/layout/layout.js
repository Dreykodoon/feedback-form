import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Header from './header';
import Footer from './footer';

const styles = {
    layout: {
        position: 'relative',
    }
};

const Layout = ({children}) => (
    <div style={styles.layout}>
        <Header/>
        <Toolbar/>
        {children}
        <Footer/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
