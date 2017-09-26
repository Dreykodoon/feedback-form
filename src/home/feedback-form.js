import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';

const styles = {
    snackbarMessage: {
        color:     '#36bd5a',
        textAlign: 'center',
        width:     '100%',
    }
};

class FeedbackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            snackbarOpen: true,
            name:    '',
            email:   '',
            subject: '',
            message: '',
        };
    }

    sendTestData() {
        axios({
            method: 'post',
            url:    '/app',
            data:   this.state,
        }).then(() => console.log('response received'));
    }

    handleChange(fieldName) {
        return (event) => {
            this.setState({
                [fieldName]: event.target.value,
            });
        };
    }

    handleSnackbarClose() {
        this.setState({snackbarOpen: false});
    }

    render() {
        const {name, email, subject, message} = this.state;
        const {classes} = this.props;

        return (
            <div>
                <TextField onChange={this.handleChange('name')} value={name} label='Name' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('email')} value={email} label='Email' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('subject')} value={subject} label='Subject' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('message')} value={message} rows='5' rowsMax='5' label='Message' multiline fullWidth margin='normal'/>
                <Button raised onClick={this.sendTestData.bind(this)}>Submit</Button>
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={this.state.snackbarOpen} onRequestClose={this.handleSnackbarClose.bind(this)}
                          SnackbarContentProps={{classes: {message: classes.snackbarMessage}}} message='Welcome to my world!'/>
            </div>
        );
    }
}

FeedbackForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
