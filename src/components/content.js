import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
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
            <RaisedButton label='Click me!' onClick={this.buttonClicked.bind(this)}/>
            <img src={imageUrl}/>
            <Link to='/contact'>
                <RaisedButton label='Go to Contact' primary={true}/>
            </Link>
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
