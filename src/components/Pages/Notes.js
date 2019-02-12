import React, { Component } from 'react';

import AddNote from '../AddNote';

class Notes extends Component {
    state = {
        notes: []
    }

    // markComplete = (id) => {
    //     this.setState({ todos: this.state.todos.map(todo => {
    //       if(todo.id === id) {
    //         todo.completed = !todo.completed
    //       }
    //       return todo;
    //     }) })
    //   }

    delNote = (id) => {

    }

  render() {
    return (
      <div>
        <AddNote addNote={this.addNote}/>
      </div>
    )
  }
}

export default Notes
