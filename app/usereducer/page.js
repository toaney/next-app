'use client'

import React, {useReducer, useState} from 'react'
import Todo from './todo'

const ACTIONS = {
  INCREMENT: 'increment', 
  DECREMENT: 'decrement'
}


function reducer(state, action) {
  switch ( action.type ) {
    case ACTIONS.INCREMENT: 
      return { count: state.count + 1};
    case ACTIONS.DECREMENT:
      return { count: state.count - 1};
    default: 
      return state;
  }
};

const page = (() => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  // const [input, setInput] = useState('')
  const [count, setCount] = useState(0);


  // function handleSubmit(e){
  //   e.prevent.default
  // };

  function increment(){
    // setCount(count + 1);
    dispatch({type: ACTIONS.INCREMENT});
  };

  function decrement(){
    // setCount(count - 1);
    dispatch({type: ACTIONS.DECREMENT});

  };

  return (
    <>
      <h1>useReducer</h1>
      <button onClick={decrement}>-</button>
      <span> &nbsp;{state.count} &nbsp;</span>
      <button onClick={increment}>+</button>







      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      </form> */}
      {/* <Todo /> */}
      {/* {todos.map(todo => {

      })} */}
    </>
  )
})

export default page