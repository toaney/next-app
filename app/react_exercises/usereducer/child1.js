'use client';

import React, {useContext} from 'react';
import {CountContext, ACTIONS} from './page';



const Child = (({dispatch}) => {
  const state = useContext(CountContext)
  console.log(state)

  function increment(){
    // setCount(count + 1);
    dispatch({type: ACTIONS.INCREMENT});
  };

  return(
    <>
      <h4>Child</h4>
      <div>
        <span>{state.count}</span>
      </div>
      <button onClick={increment}>+</button>
    </>
  )
});

export default Child;