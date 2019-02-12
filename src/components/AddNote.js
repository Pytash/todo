import React, { Component } from 'react'

import AddNoteStyle from './Pages/AddNoteStyle.css';

export class AddNote extends Component {
    state = {
        title: ''
    }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input style={AddNoteStyle} className='Search'
            type='text'
            name='title'
            placeholder='Add Note...'
            value={this.state.note}
            onChange={this.onChange}
        />
        <input className='submit-note' 
            type='submit'
            value='Submit'
        />

      </form>
    )
  }
}

export default AddNote
