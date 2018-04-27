import React from 'react';
//import PropTypes from 'prop-types';

class Header extends React.Component {
    state = {
        url: '../img/header-img.png'
    };
    render() {
        return (
            <header>
                <div className="logo type--headline">
                    <img src="../img/flower.png">
                        <span>Lubeka</span>
                </div>
                <nav className="main--navigation--container">
                    <ul className="main--navigation" id="menu">
                        <li data-menuanchor="section-1">
                            <a href="#about" className="nav--item active">
                                Who.
                                <span className="nav--desc baskerville">about me.</span>
                            </a>
                        </li>
                        <li data-menuanchor="section-2">
                            <a href="#skills" className="nav--item">
                                How.
                            </a>
                        </li>
                        <li data-menuanchor="section-3">
                            <a href="#work" className="nav--item">
                                What.
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <nav img-url="../img/header-img.png"/>
        );
    }
}

// Header.propTypes = {
//     message: PropTypes.string
// };

export default Header;
