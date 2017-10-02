import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';

const styles = {
    snackbarMessageSuccess: {
        color:     '#36bd5a',
        textAlign: 'center',
        width:     '100%',
    },
    snackbarMessageFailure: {
        color:     '#bd2c35',
        textAlign: 'center',
        width:     '100%',
    },
};

class FeedbackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            snackbarOpen:    false,
            snackbarMessage: '',
            messageSent:     false,
            formData:        {
                name:    '',
                email:   '',
                subject: '',
                message: '',
                email2:  '',
            },
        };
    }

    sendTestData() {
        axios({
            method: 'post',
            url:    '/app',
            data:   this.state.formData,
        })
            .then(() => {
                this.setState({
                    snackbarOpen:    true,
                    snackbarMessage: 'Message sent successfully!',
                    messageSent:     true
                });
            })
            .catch(() => {
                this.setState({
                    snackbarOpen:    true,
                    snackbarMessage: 'Error when sending message. Please try again.',
                    messageSent:     false
                });
            });
    }

    handleChange(fieldName) {
        return (event) => {
            const formData = {...this.state.formData};
            formData[fieldName] = event.target.value;
            this.setState({formData});
        };
    }

    handleSnackbarClose() {
        this.setState({snackbarOpen: false});
    }

    render() {
        const {formData, snackbarMessage, messageSent} = this.state;
        const {classes} = this.props;

        return (
            <div>
                <TextField onChange={this.handleChange('name')} value={formData.name} label='Name' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('email')} value={formData.email} label='Email' fullWidth margin='normal'/>
                <TextField style={{display: 'none'}} onChange={this.handleChange('email2')} value={formData.email} label='Email2  ' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('subject')} value={formData.subject} label='Subject' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('message')} value={formData.message} rows='5' rowsMax='5' label='Message' multiline fullWidth
                           margin='normal'/>
                <Button raised onClick={this.sendTestData.bind(this)}>Submit</Button>
                <Snackbar anchorOrigin={{
                    vertical:   'top',
                    horizontal: 'center'
                }} open={this.state.snackbarOpen} onRequestClose={this.handleSnackbarClose.bind(this)}
                          SnackbarContentProps={{classes: {message: messageSent ? classes.snackbarMessageSuccess : classes.snackbarMessageFailure}}}
                          message={snackbarMessage} autoHideDuration={5000}/>
            </div>
        );
    }
}

FeedbackForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
