import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';
import {withStyles} from 'material-ui/styles';
import Container from '../layout/container';
import FeedbackForm from './feedback-form';

const styles = {
    body:            {
        padding:         16,
        marginTop:       16,
        marginBottom:    16,
        backgroundColor: '#eee',
        maxWidth:        '1140px',
        display:         'flex',
    },
    leftContainer:   {
        display:      'flex',
        flexWrap:     'wrap',
        alignContent: 'center',
    },
    snackbarContent: {
        color:     '#36bd5a',
        textAlign: 'center',
        width:     '100%',
    }
};

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            snackbarOpen: true,
        };
    }

    handleSnackbarClose() {
        this.setState({snackbarOpen: false});
    }

    render() {
        const {classes} = this.props;

        return (<Container>
            <Paper className={classes.body} elevation={1}>
                <Grid container>
                    <Grid item xs={12} sm={6} className={classes.leftContainer}>
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
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={this.state.snackbarOpen} onRequestClose={this.handleSnackbarClose.bind(this)}
                      SnackbarContentProps={{classes: {message: classes.snackbarContent}}} message='Welcome to my world!'/>
        </Container>);
    }
}

Home.propTypes = {
    classes:  PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
