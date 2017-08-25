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
        marginTop:       16,
    }
};

const Home = () => (
    <Container>
        <Paper style={styles.body} elevation={1}>
            <Typography type='display3' component='h1'>
                Feedback form
            </Typography>
            <Typography gutterBottom noWrap>
                {`
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `}
            </Typography>
        </Paper>
        <Paper>
            <Typography gutterBottom noWrap>
                {`
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `}
            </Typography>
        </Paper>
    </Container>
);

export default Home;
