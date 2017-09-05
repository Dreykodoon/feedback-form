import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import imageUrl from '../images/dreyko.png';

const styles = {
    footer: {
        backgroundColor: 'black',
        color:           'white',
    }
};

const Footer = () => (
    <footer style={styles.footer}>
        <Grid style={{maxWidth: '1140px', margin: 'auto'}}>
            <Toolbar style={{justifyContent: 'space-around'}} disableGutters>
                <Typography color='inherit'>
                    Created by: Mihai Cioban
                </Typography>
                <img src={imageUrl} width={50} height={50}/>
            </Toolbar>
        </Grid>
    </footer>
);

export default Footer;
