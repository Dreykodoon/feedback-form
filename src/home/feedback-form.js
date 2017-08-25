import React from 'react';
import TextField from 'material-ui/TextField';

const FeedbackForm = () => (
    <div>
        <TextField label='Name' fullWidth margin='normal' />
        <TextField label='Email' fullWidth margin='normal' />
        <TextField label='Subject' fullWidth margin='normal' />
        <TextField rows='5' rowsMax='5' label='Message' multiline fullWidth margin='normal' />
    </div>
);

export default FeedbackForm;
