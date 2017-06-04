import React from 'react';
import Footer from './footer';
import Content from './content';
import Header from './header';
import '../style.scss';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome',
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Content/>
                <Footer />
            </div>
        );
    }
}