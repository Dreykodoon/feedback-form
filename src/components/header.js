import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {NavLink} from 'react-router-dom';

const styles = {
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 75,
        backgroundColor: 'black',
    },
    title: {
        marginLeft: 24,
        color: 'gray',
    },
    separator: {
        backgroundColor: 'gray',
    },
    link: {
        color: 'gray',
        marginRight: 0,
    },
    button: {
        color: 'inherit',
    },
};

export default class Header extends React.Component {
    render() {
        return (
            <Toolbar style={styles.header}>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text='Feedback Form' style={styles.title}/>
                    <ToolbarSeparator style={styles.separator}/>
                    <NavLink to='/home' style={styles.link} activeStyle={{...styles.link, color: 'white'}}>
                        <FlatButton label='Home' style={styles.button}/>
                    </NavLink>
                    <NavLink to='/contact' style={styles.link} activeStyle={{...styles.link, color: 'white'}}>
                        <FlatButton label='Contact' style={styles.button}/>
                    </NavLink>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
