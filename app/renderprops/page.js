'use client';

import React from 'react';
import Product from './product';

const page = (() => {
  return (
    <>
      <h2>Render Props</h2>
      <Product title="chair" description="a nice comfy chair" price="55"/>
      <Product title="bike" description="56 cm road bike" price="1299"/>
      <Product title="air fryer" description="convenient cooking appliance" price="260"/>
    </>
  )
})

export default page;