import React, { Component } from 'react'

class NoteItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            margin: '10px',
            boxShadow: '0 4px 8px 0 #2c2c2d',
            textDecoration: this.props.note.completed ? 'line-through' : 'none',
            borderRadius: '5px'
        }
    }

  render() {
      const {id, title} = this.props.note;

    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
            {title}
            <button onClick={this.props.delNote.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding:'3px 10px',
    borderRadius: '25%',
    cursor: 'pointer',
    float: 'right'
}

export default NoteItem
