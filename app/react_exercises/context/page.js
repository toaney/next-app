'use client'

import React from 'react';
import Child1 from './child-component-1';
import Child2 from './child-component-2'

export const CountContext = React.createContext(0);

const context = (() => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    startCounter(count)
  }, []);



  const startCounter = (count) => {
    const interval = setInterval(() => {
      // setCount(count => count)
      setCount(count++)
      console.log(count);
      if (count > 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  return (
    <>
      <div>Context</div>
      <span>{count}</span>
      <br/>
      <button onClick={() => startCounter(count)}>Start Counter</button>
      <CountContext.Provider value={count}>
        <Child1 />
        <Child2 />
      </CountContext.Provider>
    </>
  );
});

export default context;
