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
            <Grid style={{width: '45%', alignContent: 'center'}} container align='center'>
                <Typography style={{width: '100%'}} type='display3' component='h1' gutterBottom align='center'>
                    Feedback form
                </Typography>
                <Typography style={{textAlign: 'justify'}} component='p' gutterBottom>
                    {`
                      This application is a playground where I can test and learn new technologies.
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
