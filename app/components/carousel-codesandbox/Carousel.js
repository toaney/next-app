import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ itemList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log({ itemList });

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = itemList.length - 1;
    } else if (newIndex >= itemList.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {itemList.map((item, index) => {
          // console.log({item})
          // console.log(index);
          return <CarouselItem item={item} key={index} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        {itemList.map((item, index) => {
          return <button onClick={() => updateIndex(index)}>.</button>;
        })}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
      <p>{activeIndex}</p>
    </div>
  );
};

export default Carousel;
