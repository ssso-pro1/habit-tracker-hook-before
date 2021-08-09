import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  // handleIncrement = () => {
  //     this.props.onIncrement{this.props.proHabit};
  // }

  render() {
    return (
      <nav className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
