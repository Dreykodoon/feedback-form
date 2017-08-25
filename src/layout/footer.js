import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Container from './container';

const styles = {
    footer: {
        backgroundColor: 'black',
        color:           'white',
    }
};

export default class Footer extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <footer style={styles.footer}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography type='title' color='inherit'>
                            {this.props.title}
                        </Typography>
                        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
                    </Toolbar>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    title:       PropTypes.string,
    changeTitle: PropTypes.func,
};
