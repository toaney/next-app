'use client';

import React from 'react';

const description = ((props) => {
  const {description, price} = props

  return(
    <>
      <span>{description}</span><br />
      <span>${price}</span>
    </>
  )
})

export default description;