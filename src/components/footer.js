import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class Footer extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <footer>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </footer>
        );
    }
}

Footer.propTypes = {
    title:       PropTypes.string,
    changeTitle: PropTypes.func,
};
