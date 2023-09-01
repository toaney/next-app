"use client"

import React from 'react'
import CarouselItem from './carouselItem';

export default function CarouselContainer({items}) {
  const[itemList, useItemList] = React.useState(items)
  const[activeIndex, setActiveIndex] = React.useState(0);

  function updateIndex (newIndex){
    if (newIndex < 0) { 
      // setActiveIndex(0)
      newIndex = 0
    }
    if (newIndex >= itemList.length){
      // setActiveIndex(itemList.length - 1)
      newIndex = itemList.length - 1;
    }
    setActiveIndex(newIndex)
  }

  console.log(items)
  return(
    <div className="carousel-container">
      <h3>Carousel Container</h3>
      <div 
        className="inner"
        // style={{ transform: `translate:(-${activeIndex * 100}%)`}}
        style={{ transform: `translate(-${activeIndex * 100}%)`}}
      >
        {items.map((item, index) => {
          return(
            <CarouselItem item={item} />
          )
        })}
      </div>
      <div>
        <button onClick={() => (updateIndex(activeIndex - 1))}>prev</button>
        {itemList.map((item, index) => {
          return (<button onClick={() => (updateIndex())}>.</button>)
        })}

        <button onClick={() => (updateIndex(activeIndex + 1))}>next</button>
      </div>
      <div style={{color:"white"}}>{activeIndex}</div>
    </div>
  )
}