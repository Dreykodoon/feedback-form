import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from 'react-bootstrap';
import {incrementCounter} from '../actions/counterActions';
import imageUrl from '../images/dreyko.png';

class Content extends React.Component {
    buttonClicked() {
        this.props.incrementCounter();
    }

    render() {
        return (<div>
            {this.props.counter}
            <br/>
            <Button onClick={this.buttonClicked.bind(this)}>{'Click me!'}</Button>
            <img src={imageUrl}/>
            <LinkContainer to='/contact'>
                <Button bsStyle='primary'>Go to Contact</Button>
            </LinkContainer>
        </div>);
    }
}

Content.propTypes = {
    counter:          PropTypes.number,
    incrementCounter: PropTypes.func,
};

const mapStateToProps = (state) => ({
    counter: state,
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: () => dispatch(incrementCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
