'use client';

import React, {useState, useEffect} from 'react';



const page = () => {
  let [percentage, setPercentage] = React.useState(100)


  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(percentage--)
      console.log(percentage)
      if (percentage < 0) {
        clearInterval(interval);
      }
    }, 5)
  }, [])

  const fillBar = (seconds) => {
    // const bar = document.querySelector('bar');
    // let atPercent = 100;
  
    // bar.style.width = atPercent + '%';j

    const interval = setInterval(() => {
      setPercentage(percentage++)
      console.log(percentage)
      if (percentage > 100) {
        clearInterval(interval);
      }
    }, (seconds)/100)

  }


  return (
    <div>
      Progress Bar
      <div className="bar-container">
        <div className="bar" style={{width: percentage + "%"}}/>
      </div>
      <button onClick={() => fillBar(5)} >
        Start
      </button>
    </div>
  )
};

export default page;