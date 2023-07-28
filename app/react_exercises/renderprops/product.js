'use client';

import React from 'react';
import Description from './description';

const product = ((props) => {
  console.log(props)
  const {title, description, price} = props

  return (
    <>
      <h3>{title}</h3>
      <Description description={description} price={price} />
    </>
  )
})

export default product;