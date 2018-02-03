import React from 'react';
//import PropTypes from 'prop-types';
import nav from 'navigation';

class Header extends React.Component {
    state = {
        url: '../img/header-img.png'
    };
    render() {
        return (
            <nav img-url="../img/header-img.png"/>
        );
    }
}

// Header.propTypes = {
//     message: PropTypes.string
// };

export default Header;
