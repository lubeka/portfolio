import React from 'react';
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return (
      <h1 className="Header text-center">{this.props.message}</h1>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string
};

export default Header;
