import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import FeedbackForm from './feedback-form';
import Container from '../layout/container';

const styles = {
    body: {
        paddingTop:      16,
        paddingBottom:   16,
        paddingLeft:     32,
        paddingRight:    32,
        backgroundColor: '#eee',
        marginBottom:    16,
        marginTop:       16,
        display:         'flex',
    }
};

const Home = () => (
    <Container>
        <Paper style={styles.body} elevation={1}>
            <Grid style={{width: '45%'}}>
                <Typography type='display3' component='h1'>
                    Feedback form
                </Typography>
                <Typography gutterBottom>
                    {`
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    `}
                </Typography>
            </Grid>
            <Grid style={{width: '10%'}}/>
            <Grid style={{width: '45%'}}>
                <FeedbackForm/>
            </Grid>
        </Paper>
    </Container>
);

export default Home;
