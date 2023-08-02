"use client"

import React from 'react'
import CarouselItem from './carouselItem';

export default function CarouselContainer({items}) {
  const[itemList, useItemList] = React.useState(["a", "b", "c"])
  const[activeIndex, setActiveIndex] = React.useState(0);

  function updateIndex (newIndex){
    if (newIndex < 0) { 
      setActiveIndex(0)
    }
    if (newIndex > items.length){
      setActiveIndex(items.length - 1)
    }
    setActiveIndex(newIndex)
  }

  console.log(items)
  return(
    <div className="carousel-container">
      <h3>Carousel Container</h3>
      <div 
        className="inner"
        style={{ transform: `translate:(-${activeIndex * 100}%)`}}
      >
        {items.map((item, index) => {
          return(
            <CarouselItem item={item} />
          )
        })}
      </div>
      <div>
        <button onClick={() => (updateIndex(activeIndex - 1))}>prev</button>
        {items.map(({items, index}) => {
          return (<button onClick={() => (updateIndex(index))}>.</button>)
        })}

        <button onClick={() => (updateIndex(activeIndex + 1))}>prev</button>
      </div>
    </div>
  )
}