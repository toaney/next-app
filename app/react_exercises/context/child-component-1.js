'use client'

import React from 'react';
import {CountContext} from './page';

const child1 = (() => {
  const value = React.useContext(CountContext);
  return (
    <>
      <h2>Child1</h2>
      <span>{value}</span>
    </>
  )
});

export default child1;