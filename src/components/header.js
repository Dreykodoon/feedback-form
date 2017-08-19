import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    header:    {
        position:        'absolute',
        top:             0,
        left:            0,
        width:           '100%',
        height:          75,
        backgroundColor: 'black',
    },
    title:     {
        marginLeft: 24,
        color:      'gray',
    },
    separator: {
        backgroundColor: 'gray',
    },
    link:      {
        color:       'gray',
        marginRight: 0,
    },
    button:    {
        color: 'inherit',
    },
};

const Header = () => (
    <AppBar style={styles.header} position="absolute">
        <Toolbar>
            <Typography type="title" color="inherit">
                Feedback Form
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
