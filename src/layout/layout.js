import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import HeaderPlaceholder from './header-placeholder';

const styles = {
    layout: {
        position: 'relative',
    }
};

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
            <div style={styles.layout}>
                <Header/>
                <HeaderPlaceholder/>
                {this.props.children}
                <Footer changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.any,
};
