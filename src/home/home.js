import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Container from '../layout/container';
import FeedbackForm from './feedback-form';

const styles = {
    body:          {
        padding:         16,
        marginTop:       16,
        marginBottom:    16,
        backgroundColor: '#eee',
        maxWidth:        '1140px',
        display:         'flex',
    },
    leftContainer:           {
        display:      'flex',
        flexWrap:     'wrap',
        alignContent: 'center',
    }
};

const Home = () => (
    <Container>
        <Paper style={styles.body} elevation={1}>
            <Grid container>
                <Grid item xs={12} sm={6} style={styles.leftContainer}>
                    <Typography style={{width: '100%'}} type='display3' component='h1' gutterBottom align='center'>
                        Feedback form
                    </Typography>
                    <Typography style={{width: '100%'}} component='p' gutterBottom align='center'>
                        {`
                          This application is a playground for testing and learning new technologies.
                        `}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={1}/>
                <Grid item xs={12} sm={5}>
                    <FeedbackForm/>
                </Grid>
            </Grid>
        </Paper>
    </Container>
);

export default Home;
