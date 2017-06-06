import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Footer',
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.any,
};
