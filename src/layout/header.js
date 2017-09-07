import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Container from './container';

const styles = {
    header: {
        backgroundColor: 'black',
        display:         'block',
    },
    headerToolbar: {
        justifyContent: 'flex-start',
        paddingLeft:    16,
    },
};

const Header = () => (
    <AppBar style={styles.header}>
        <Container>
            <Toolbar style={styles.headerToolbar} disableGutters>
                <Typography type='title' color='inherit'>
                    Feedback Form
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
