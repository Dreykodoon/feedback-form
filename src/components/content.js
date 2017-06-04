import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {incrementCounter} from '../actions/counterActions';
import imageUrl from '../dreyko.png';

class Content extends React.Component {
    buttonClicked() {
        this.props.incrementCounter();
    }

    render() {
        return (<div>
            {this.props.counter}
            <br/>
            <button type='button' onClick={this.buttonClicked.bind(this)}>{'Click me!'}</button>
            <img src={imageUrl}/>
            <Link to='/contact'>Go to Contact</Link>
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
