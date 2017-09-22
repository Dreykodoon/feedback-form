import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

class FeedbackForm extends React.Component {
    constructor() {
        super();

        this.state = {
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

    render() {
        const {name, email, subject, message} = this.state;

        return (
            <div>
                <TextField onChange={this.handleChange('name')} value={name} label='Name' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('email')} value={email} label='Email' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('subject')} value={subject} label='Subject' fullWidth margin='normal'/>
                <TextField onChange={this.handleChange('message')} value={message} rows='5' rowsMax='5' label='Message' multiline fullWidth margin='normal'/>
                <Button raised onClick={this.sendTestData.bind(this)}>Submit</Button>
            </div>
        );

    }
}

export default FeedbackForm;
