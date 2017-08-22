import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Container from './container';

export default class Footer extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <footer>
                <Container>
                    <Typography type="title">
                        {this.props.title}
                    </Typography>
                    <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    title:       PropTypes.string,
    changeTitle: PropTypes.func,
};
