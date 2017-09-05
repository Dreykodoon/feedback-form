import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    container: {
        display:        'flex',
        justifyContent: 'center',
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
