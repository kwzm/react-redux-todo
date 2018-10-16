import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './TodoItem.module.css'

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired,
    }).isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  handleChange = e => {
    this.props.toggleTodo(this.props.todo.id)
  }

  render() {
    const { todo } = this.props

    return (
      <Fragment>
        <input className={styles.toggle} type="checkbox" checked={todo.finished} onChange={this.handleChange} />
        <span className={classNames(styles.title, { [styles.finished]: todo.finished })}>{todo.title}</span>
      </Fragment>
    )
  }
}

export default TodoItem