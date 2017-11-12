import React from 'react';
import { storiesOf } from '@storybook/react';
import FeedbackForm from '../feedback-form';

storiesOf('Feedback Form', module)
    .add('_default_', () => (
        <FeedbackForm/>
    ));
