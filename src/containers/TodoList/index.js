import React from 'react'
import { TodoItem } from './components/TodoItem'

const todos = ["do homework", "clean room", "practice React", "go outside", "pet my cat"];

const TodoList = () => (
  <ul>
    {todos.map((item, idx) => <TodoItem item={item} />)}
  </ul>
)

export default TodoList;