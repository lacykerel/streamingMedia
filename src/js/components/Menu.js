import React, { Component } from 'react';

class Menu extends Component {

  constructor() {
    super();
    this.openMenu = this.openMenu.bind(this);
    this.state = {
      isOpen: false
    }
  }

  openMenu() {
    this.setState(prevState =>({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const toolClassName = `video-tooltip ${this.state.isOpen ? 'active' : ''}`;
    const menuClassName = `tool-menu ${this.state.isOpen ? 'open': ''}`;
    return (
      <div>
        <div onClick={this.openMenu} className={toolClassName}></div>
        <div className={menuClassName}>
          <ul>
            <li><a href="#">Play</a></li>
            <li><a href="#">Add to Queue</a></li>
            <li><a href="#">Add to Favorites</a></li>
            <li><a href="#">Find Similar Videos</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
