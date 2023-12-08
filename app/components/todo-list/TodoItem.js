import React from 'react';

const TodoItem = ({id, value, checked, callback}) => {
  return (
    <>
      <div>
        <input type='checkbox' id={id} checked={checked} onChange={e => {callback(e)}}></input>
        {value}
      </div>
    </>
  )
}

export default TodoItem;