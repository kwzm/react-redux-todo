let baseId = 0

const defaultState = {
  todos: [],
  left: 0,
  filter: 'All',
}

const CREATE_TODO = 'CREATE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const FILTER_TODOS = 'FILTER_TODOS'

export function createTodo(title) {
  return {
    type: CREATE_TODO,
    title,
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function filterTodos(filter) {
  return {
    type: FILTER_TODOS,
    filter,
  }
} 

const ACTION_HANDLERS = {
  [CREATE_TODO]: (state, action) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: ++baseId,
        title: action.title,
        finished: false,
      }
    ],
    left: ++state.left,
  }),
  [REMOVE_TODO]: (state, action) => {
    const todos = state.todos.filter(todo => {
      return todo.id !== action.id
    })

    return {
      ...state,
      todos,
      left: todos.filter(todo => !todo.finished).length, 
    }
  },
  [TOGGLE_TODO]: (state, action) => {
    const todos = state.todos.map(todo => {
      if (todo.id === action.id) {
        return {
          ...todo,
          finished: !todo.finished
        }
      } else {
        return todo
      }
    })

    return {
      ...state,
      todos: todos,
      left: todos.filter(todo => !todo.finished).length, 
    }
  },
  [FILTER_TODOS]: (state, action) => ({
    ...state,
    filter: action.filter
  })
}

export default function reducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state;
}