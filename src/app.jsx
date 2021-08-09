import React, { Component } from 'react';
import './app.css';

import Habits from './components/habits';
import HabitAddForm from './components/habitAddForm';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Running', count: 0 },
    ],
  };

  handleIncrement = proHabit => {
    console.log(`handleIncrement ${proHabit.name}`);

    const newHabits = [...this.state.habits];
    const index = newHabits.indexOf(proHabit);
    // newHabits[index].count = this.proHabit.count + 1;
    newHabits[index].count++;
    this.setState({ habits: newHabits });
  };

  handleDecrement = proHabit => {
    console.log(`handleDecrement ${proHabit.name}`);

    const newHabits = [...this.state.habits];
    const index = newHabits.indexOf(proHabit);
    const count = newHabits[index].count - 1;
    newHabits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: newHabits });
  };

  handleDelete = proHabit => {
    console.log(`handleDelete ${proHabit.name}`);

    const newHabits = this.state.habits.filter(item => item.id !== proHabit.id);
    this.setState({ habits: newHabits });
  };

  render() {
    return (
      <>
        {/* Navbar */}
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
