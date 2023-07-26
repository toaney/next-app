'use client'

import React from 'react';
import {CountContext} from './page';

const child2 = (() => {
  const count = React.useContext(CountContext)

  return (
    <>
      <h2>Child2</h2>
      <span>{count}</span>
    </>
  )
});

export default child2;