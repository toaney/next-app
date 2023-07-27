'use client'

import React, {useReducer, useState} from 'react'
import Todo from './todo'

function reducer() {

}

const page = (() => {
  const [state, dispatch] = useReducer(reducer, {todos:[]})
  const [input, setInput] = useState('')


  function handleSubmit(e){
    e.prevent.default
  }

  return (
    <>
      <h1>useReducer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      </form>
      <Todo />
      {/* {todos.map(todo => {

      })} */}
    </>
  )
})

export default page