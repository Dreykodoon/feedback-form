import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

export default class Footer extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <footer>
                <Typography type="title">
                    {this.props.title}
                </Typography>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </footer>
        );
    }
}

Footer.propTypes = {
    title:       PropTypes.string,
    changeTitle: PropTypes.func,
};
