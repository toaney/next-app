"use client"

import React from 'react'

export default function CarouselItem({item}) {
  return(
    <div className="carousel-item">
      <h3>Carousel Item</h3>
      <img src={item.img} />
      <div>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>

    </div>
  )
}