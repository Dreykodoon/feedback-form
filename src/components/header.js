import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Nav bsStyle='tabs' activeKey='1'>
                <NavItem eventKey='1'>Home</NavItem>
                <NavItem eventKey='2'>Contact</NavItem>
            </Nav>
        );
    }
}
