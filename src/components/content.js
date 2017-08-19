import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
import imageUrl from '../images/dreyko.png';

const Content = () => (
    <div>
        <img src={imageUrl}/>
        <Link to='/contact'>
            <Button raised color="primary">Go to Contact</Button>
        </Link>
    </div>
);

export default Content;
