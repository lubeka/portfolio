import React from 'react';
//import PropTypes from 'prop-types';
import linkListL from './nav/linkListL';
import linkListR from './nav/linkListR';

class Navigation extends React.Component {
    render() {
        return (
            <header className="navbar text-center text-uppercase justify-content-center p-4 position-absolute">
                <div className="header-img navbar-background text-center">
                    <img src={this.props.imgurl}/>
                </div>
                <ul className="nav tk-baskerville-urw">
                    {linkListL}
                </ul>
                <span className="text-center navbar-brand type--headline ml-4 mr-4">
                    {this.props.logo}
                </span>
                <ul className="nav tk-baskerville-urw">
                    {linkListR}
                </ul>
            </header>
        );
    }
}


export default Navigation;
