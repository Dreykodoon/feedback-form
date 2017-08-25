import React from 'react';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Container from './container';
import imageUrl from '../images/dreyko.png';

const styles = {
    footer: {
        backgroundColor: 'black',
        color:           'white',
    }
};

const Footer = () => (
    <footer style={styles.footer}>
        <Container>
            <Toolbar style={{justifyContent: 'space-around'}} disableGutters>
                <Typography color='inherit'>
                    Created by: Mihai Cioban
                </Typography>
                <img src={imageUrl} width={50} height={50}/>
            </Toolbar>
        </Container>
    </footer>
);

export default Footer;
