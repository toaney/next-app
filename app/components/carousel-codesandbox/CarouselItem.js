import React from "react";

const CarouselItem = ({ item, key }) => {
  return (
    <div className="carousel-item" key={key}>
      {item}
    </div>
  );
};

export default CarouselItem;
