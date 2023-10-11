'use client';

import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

const taskList = [
  {
    id: 1,
    value: "take out the trash",
    checked: false
  },
  {
    id: 2,
    value: "do the dishes",
    checked: false
  },
  {
    id: 3,
    value: "feed the rabbits",
    checked: true
  }
]


const TodoList = () => {
  const [todos, setTodos] = useState(taskList);

  const handleChange = (e) => {
    // write state change here
  }

  return(
    <>
      <h2>Todos</h2>

      {todos.map(item => {
        <TodoItem id={item.id} value={item.value} onChange={(e) => handleChange(e.target.checked)}/>
      })}
    </>
  )
}

export default TodoList;