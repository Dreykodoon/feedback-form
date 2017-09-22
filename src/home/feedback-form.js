import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

function sendEmail() {
    axios({
        method: 'post',
        url:    '/test',
        data:   {
            test: 'test'
        }
    });
}

const FeedbackForm = () => (
    <div>
        <TextField label='Name' fullWidth margin='normal'/>
        <TextField label='Email' fullWidth margin='normal'/>
        <TextField label='Subject' fullWidth margin='normal'/>
        <TextField rows='5' rowsMax='5' label='Message' multiline fullWidth margin='normal'/>
        <Button raised onClick={sendEmail}>Submit</Button>
    </div>
);

export default FeedbackForm;
