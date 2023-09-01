'use client';
import React, {useState, useEffect} from 'react';

const page = () => {
  let [percentage, setPercentage] = useState(0);
  let [seconds, setSeconds] = useState(5);

  // useEffect(() => {
  //   emptyBar(5)
  // }, [])

  // const fillBar = (seconds) => {
  //   const interval = setInterval(() => {
  //     setPercentage(percentage++)
  //     console.log(percentage)
  //     if (percentage > 100) {
  //       clearInterval(interval);
  //     }
  //   }, (seconds)/100)
  // }

  const fillBar = (duration) => {
    setPercentage(100)
    setSeconds(duration)
  }

  const emptyBar = (duration) => {
    const interval = setInterval(() => {
      setPercentage(percentage--)
      console.log(percentage)
      if (percentage < 0) {
        clearInterval(interval);
      }
    }, duration)
  }

  return (
    <div>
      <h5>Progress Bar</h5>
      <div className="bar-container">
        <div className="bar" style={{transition: `width ${seconds}s`, width: percentage + "%"}}/>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => fillBar(5)} >
          Fill
        </button>
        <button className="button" onClick={() => emptyBar(15)} >
          Empty
        </button>
      </div>
    </div>
  )
};

export default page;