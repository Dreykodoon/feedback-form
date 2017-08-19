import React from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {NavLink} from 'react-router-dom';

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
    <AppBar style={styles.header} position="static">
        <Toolbar>
            <Typography type="title" color="inherit">
                Feedback Form
            </Typography>
            <NavLink to='/home' style={styles.link} activeStyle={{
                ...styles.link,
                color: 'white'
            }}>
                <Button style={styles.button}>Home</Button>
            </NavLink>
            <NavLink to='/contact' style={styles.link} activeStyle={{
                ...styles.link,
                color: 'white'
            }}>
                <Button style={styles.button}>Contact</Button>
            </NavLink>
        </Toolbar>
    </AppBar>
);

export default Header;
