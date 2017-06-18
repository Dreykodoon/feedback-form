import React from 'react';

const style = {
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 75,
    }
};

export default class Header extends React.Component {
    render() {
        return (
            <div style={style.header}>
                <p>Header</p>
            </div>
        );
    }
}
