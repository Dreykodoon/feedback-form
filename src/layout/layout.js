import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import HeaderPlaceholder from './header-placeholder';

const styles = {
    layout: {
        position: 'relative',
    }
};

const Layout = ({children}) => (
    <div style={styles.layout}>
        <Header/>
        <HeaderPlaceholder/>
        {children}
        <Footer/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
