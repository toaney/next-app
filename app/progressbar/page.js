'use client';

import React, {useState, useEffect} from 'react';



const page = () => {
  let [percentage, setPercentage] = useState(100)


  useEffect(() => {
    emptyBar(5)
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

  const emptyBar = (seconds) => {
    // const bar = document.querySelector('bar');
    // let atPercent = 100;
  
    // bar.style.width = atPercent + '%';j

    const interval = setInterval(() => {
      setPercentage(percentage--)
      console.log(percentage)
      if (percentage < 0) {
        clearInterval(interval);
      }
    }, seconds)

  }


  return (
    <div>
      <h5>Progress Bar</h5>
      <div className="bar-container">
        <div className="bar" style={{width: percentage + "%"}}/>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => fillBar(5)} >
          Fill
        </button>
        <button className="button" onClick={() => emptyBar(5)} >
          Empty
        </button>
      </div>
    </div>
  )
};

export default page;