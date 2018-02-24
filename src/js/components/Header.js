import React, { Component } from 'react';
import Logo from '../../img/logo.svg';

class Header extends Component {
  render() {
    return(
      <header>
        <Logo className="logo" />
      </header>
    )
  }
}

export default Header;
