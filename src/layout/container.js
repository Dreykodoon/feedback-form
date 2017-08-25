import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    container: {
        marginLeft:  '15%',
        marginRight: '15%',
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
