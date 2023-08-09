'use client';

import React from 'react';
import SingleArrayQueue from './SingleArrayQueue';
import DoubleArrayQueue from './DoubleArrayQueue';

const page = () => {
  return (
    <>
    <h4>Queue</h4>
    {/* <SingleArrayQueue /> */}
    <DoubleArrayQueue />
    </>
  )
}

export default page;