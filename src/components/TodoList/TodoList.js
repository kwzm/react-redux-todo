import React, { Component } from "react"
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.css'

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  render() {
    const { 
      todos, 
      removeTodo, 
      toggleTodo,
    } = this.props

    return (
      <ul className={styles.todoView}>
        { todos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            <TodoItem todo={todo} toggleTodo={toggleTodo} />
            <span className={styles.delete} onClick={e => removeTodo(todo.id)}>x</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default TodoList