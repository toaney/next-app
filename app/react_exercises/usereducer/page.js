'use client'

import React, {useReducer, useState, createContext} from 'react'
import Child from './child1';

export const ACTIONS = {
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

export const CountContext = createContext(0);

const page = (() => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [count, setCount] = useState(0);


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
      <br />
      <br />
      <CountContext.Provider value={state} >
        <Child dispatch={dispatch}/>
      </CountContext.Provider>
    </>
  )
})

export default page