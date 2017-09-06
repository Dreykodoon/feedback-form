import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    container: {
        width:  '1140px',
        margin: 'auto'
    }
};

const Container = ({children}) => (
    <div style={styles.container}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;
