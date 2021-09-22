import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as todosActions from './actions/todos';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newTodoText: '',
  };
  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' });
  };

  render() {
    return (
      <>
        <div className='webflow-style-input'>
          <input
            placeholder='Insira sua tarefa'
            type='text'
            value={this.state.newTodoText}
            onChange={(e) => this.setState({ newTodoText: e.target.value })}
          />
        </div>
        <button className='button-9' onClick={this.addNewTodo}>
          NOVO TODO
        </button>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(todosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
