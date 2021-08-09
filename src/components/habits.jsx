import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = proHabit => {
    this.props.onIncrement(proHabit);
  };

  handleDecrement = proHabit => {
    this.props.onDecrement(proHabit);
  };

  handleDelete = proHabit => {
    this.props.onDelete(proHabit);
  };

  render() {
    return (
      <ul>
        {/* habits 받은 걸 map해서 habit 으로 표현, 나오게 ??? */}
        {this.props.habits.map(proHabit => (
          <Habit
            key={proHabit.id}
            proHabit={proHabit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
