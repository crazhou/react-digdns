import React from 'react'
import Todo from './Todo'

// 渲染列表需要使用Map 方式
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => 
          <Todo {...todo}
              key={index}
              onClick={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    )
  }
}

export default TodoList