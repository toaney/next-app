'use client';

import React from 'react';

const page = (() => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h3>Counter</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span> &nbsp;{count} &nbsp;</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
});

export default page;