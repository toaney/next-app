'use client';

import React from 'react';

const CarouselItem = (({item}) => {

  return(
    <div className="carousel-item">
      <div>{item.title}</div>
      <img src={item.image} />
      <div>{item.description}</div>
    </div>
  )
});

export default CarouselItem;