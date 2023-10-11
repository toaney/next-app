import React from 'react';

const TodoItem = ({id, value, callback}) => {
  return (
    <>
      <div>
        <input type='checkbox'></input>
        Todo item
      </div>
    </>
  )
}

export default TodoItem;