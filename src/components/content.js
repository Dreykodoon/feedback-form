import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import imageUrl from '../images/dreyko.png';

const Content = () => (
    <div>
        <img src={imageUrl}/>
        <Link to='/contact'>
            <RaisedButton label='Go to Contact' primary={true}/>
        </Link>
    </div>
);

export default Content;
