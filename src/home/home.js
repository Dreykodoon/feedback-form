import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Container from '../layout/container';

const styles = {
    body: {
        paddingTop:      16,
        paddingBottom:   16,
        paddingLeft:     32,
        paddingRight:    32,
        backgroundColor: '#eee',
        marginBottom:    16,
    }
};

const Home = () => (
    <Container>
        <Paper style={styles.body} elevation={1}>
            <Typography type="headline" component="h3">
                Feedback form
            </Typography>
        </Paper>
    </Container>
);

export default Home;
