import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AddTodoStyle from './Pages/AddTodoStyle.css';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input style={AddTodoStyle} className="Search"
           type="text"
           name="title"
           placeholder="Add Todo ..."
           value={this.state.title}
           onChange={this.onChange}
           />
           <input
            type='submit'
            value='Submit'
            className='btn'
            style={{flex: '1'}}
            />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addtodo: PropTypes.func.isRequired
}

export default AddTodo
