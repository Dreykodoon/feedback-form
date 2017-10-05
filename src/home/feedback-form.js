import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';

const styles = {
    success: {
        color:     '#36bd5a',
        textAlign: 'center',
        width:     '100%',
    },
    failure: {
        color:     '#d72c3a',
        textAlign: 'center',
        width:     '100%',
    },
};

class FeedbackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            snackbarOpen:       false,
            snackbarMessage:    '',
            operationSucceeded: false,
            formError:          false,
            formData:           {
                name:    '',
                email:   '',
                message: '',
                email2:  '',
            },
        };
    }

    isFormValid() {
        const {formData} = this.state;

        return formData.name && formData.email && formData.message;
    }

    sendMessage() {
        this.setState({formError: false});

        if (this.isFormValid()) {
            this.setState({
                formData: {
                    name:    '',
                    email:   '',
                    message: '',
                    email2:  '',
                }
            });

            axios({
                method: 'post',
                url:    '/app',
                data:   this.state.formData,
            })
                .then(() => {
                    this.setState({
                        snackbarOpen:       true,
                        snackbarMessage:    'Message sent successfully!',
                        operationSucceeded: true
                    });
                })
                .catch(() => {
                    this.setState({
                        snackbarOpen:       true,
                        snackbarMessage:    'Error when sending message. Please try again.',
                        operationSucceeded: false
                    });
                });
        }
        else {
            this.setState({
                snackbarOpen:       true,
                snackbarMessage:    'Please fill in all empty fields.',
                operationSucceeded: false,
                formError:          true,
            });
        }
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
        const {formData, formError, snackbarMessage, operationSucceeded, snackbarOpen} = this.state;
        const {classes} = this.props;

        return (
            <div>
                <TextField onChange={this.handleChange('name')} value={formData.name} label='* Name' fullWidth error={!formData.name && formError}/>
                <TextField onChange={this.handleChange('email')} value={formData.email} label='* Email' fullWidth error={!formData.email && formError}/>
                <TextField style={{display: 'none'}} onChange={this.handleChange('email2')} value={formData.email} label='* Email2' fullWidth/>
                <TextField onChange={this.handleChange('message')} value={formData.message} rows='5' rowsMax='5' label='* Message' multiline fullWidth
                           error={!formData.message && formError}/>
                <Button raised onClick={this.sendMessage.bind(this)}>Submit</Button>
                <Snackbar anchorOrigin={{
                    vertical:   'top',
                    horizontal: 'center'
                }} open={snackbarOpen} onRequestClose={this.handleSnackbarClose.bind(this)}
                          SnackbarContentProps={{classes: {message: operationSucceeded ? classes.success : classes.failure}}}
                          message={snackbarMessage} autoHideDuration={5000}/>
            </div>
        );
    }
}

FeedbackForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
