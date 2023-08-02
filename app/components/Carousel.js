'use client';

import React, {useState, useEffect} from 'react';
import CarouselItem from './CarouselItem';

const Carousel = (({itemList}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(activeIndex)
      updateIndex(activeIndex +1 >= itemList.length ? 0 : activeIndex + 1)
    }, 3000)
  },[activeIndex])

  function updateIndex(newIndex){
    if(newIndex < 0){
      newIndex = 0;
    }
    if(newIndex >= itemList.length){
      newIndex = itemList.length - 1;
    }
    setActiveIndex(newIndex);
  }

  return(
    <div className="carousel-container">
      <div 
        className="carousel-inner"
        style={{transform: `translate(-${activeIndex * 100}%)`}}
      >
        {itemList.map((item, index) => {
          return(
            <CarouselItem item={item} key={index} />
          )
        })}
      </div>
      <div className="carousel-buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        {itemList.map((item, index) => {
          return <button onClick={() => updateIndex(index)}>.</button>
        })}
        <button onClick={() => updateIndex(activeIndex + 1)}>next</button>
        <div>{activeIndex}</div>
      </div>
    </div>
  )
});

export default Carousel;