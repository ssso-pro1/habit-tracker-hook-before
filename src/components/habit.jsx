import React, { Component } from 'react';

class Habit extends Component {
  handleIncrement = () => {
    //habits에서는 proHabit을 인자로 받고 habit에서는 없음 ??? <질문>
    this.props.onIncrement(this.props.proHabit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.proHabit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.proHabit);
  };

  render() {
    const { name, count } = this.props.proHabit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
