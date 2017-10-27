import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {CircularProgress} from 'material-ui/Progress';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';
import validator from 'validator';
import {generateErrorMessage, isFormValid} from './feedback-form-validation';

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
    submitProgre: {
        position:   'absolute',
        top:        '50%',
        left:       '50%',
        marginTop:  -12,
        marginLeft: -12,
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
            submitDisabled:     false,
        };
    }

    sendMessage() {
        if (isFormValid(this.state.formData)) {
            this.setState({submitDisabled: true});
            axios({
                method: 'post',
                url:    '/app',
                data:   this.state.formData,
            })
                .then(() => {
                    this.setState({
                        snackbarOpen:       true,
                        snackbarMessage:    'Message sent successfully!',
                        operationSucceeded: true,
                        formError:          false,
                        formData:           {
                            name:    '',
                            email:   '',
                            message: '',
                            email2:  '',
                        },
                        submitDisabled:     false,
                    });
                })
                .catch(() => {
                    this.setState({
                        snackbarOpen:       true,
                        snackbarMessage:    'Error when sending message. Please try again.',
                        operationSucceeded: false,
                        submitDisabled:     false,
                    });
                });
        }
        else {
            this.setState({
                snackbarOpen:       true,
                snackbarMessage:    generateErrorMessage(this.state.formData),
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
        const {submitDisabled, formData, formError, snackbarMessage, operationSucceeded, snackbarOpen} = this.state;
        const {classes} = this.props;

        return (
            <div>
                <TextField onChange={this.handleChange('name')} value={formData.name} label='* Name' fullWidth error={!formData.name && formError}/>
                <TextField onChange={this.handleChange('email')} value={formData.email} label='* Email' fullWidth
                           error={(!formData.email || !validator.isEmail(formData.email)) && formError}/>
                <TextField style={{display: 'none'}} onChange={this.handleChange('email2')} value={formData.email} label='* Email2' fullWidth/>
                <TextField onChange={this.handleChange('message')} value={formData.message} rows='5' rowsMax='5' label='* Message' multiline fullWidth
                           error={!formData.message && formError}/>
                <div style={{position: 'relative'}}>
                    <Button raised onClick={this.sendMessage.bind(this)} disabled={submitDisabled}>
                        Submit
                        {submitDisabled && <CircularProgress size={24} className={classes.submitProgre}/>}
                    </Button>
                </div>
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
