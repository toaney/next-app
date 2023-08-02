'use client';

import React from 'react';
import Carousel from './Carousel';
import "./carousel.css"

export default function page() {
  const itemList = [
    {
      title: "Title 0", 
      image: "https://placebear.com/200/300",
      description: "Title 0: Placebear 200 x 300"
    },
    {
      title: "Title 1", 
      image: "https://placebear.com/300/300",
      description: "Title 1: Placebear 300 x 300"
    },
    {
      title: "Title 2", 
      image: "https://placebear.com/300/200",
      description: "Title 2: Placebear 300 x 200"
    },
    {
      title: "Title 3", 
      image: "https://placebear.com/300/200",
      description: "Title 3: Placebear 300 x 200"
    },
    {
      title: "Title 4", 
      image: "https://placebear.com/300/200",
      description: "Title 4: Placebear 300 x 200"
    }
  ]

  return(
    <>

      <Carousel itemList={itemList} />
    </>
  )
}