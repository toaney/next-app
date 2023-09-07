'use client';

import React, {useEffect, useState} from 'react';
import './carousel.css'


const fetchData = async function(){
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    if(!response.ok) {
      throw new Error (`HTTP error! status ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results)
    return data
  } catch (error) {
    console.error(error)
  }
}

const fetchDetails = async function (detailsUrl){
  try {
    const response = await fetch(detailsUrl);
    if(!response.ok){
      throw new Error (`HTTP error! status ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch(error) {
    console.error(error)
  }
}



const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState('');
  
  const updateActiveItem = (detailsUrl) => {
    fetchDetails(detailsUrl)
    .then(apiData => {
      setDetails(apiData)
    })
  }

  const getPrevious = () => {
    let newIndex = index - 1 > 0 ? index - 1 : carouselData.length - 1;
    setIndex(newIndex)
  }

  const getNext = () => {
    let newIndex = index + 1 < carouselData.length - 1 ? index + 1 : 0;
    updateActiveItem (carouselData[newIndex]?.url)
    setIndex(newIndex);
  }

  useEffect(() => {
    let mounted = true;

    fetchData()
      .then(apiData => {
        if(mounted) {
          setCarouselData(apiData.results)
          updateActiveItem(apiData.results[0].url)
        }
      })
    return () => mounted = false;
  }, [])

  // useEffect(() => {
  //   let mounted = true;

  //   fetchData()
  //     .then(apiData => {
  //       if(mounted) {
  //         setCarouselData(apiData.results)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [index])

  return(
    <>
      <h2>Carousel</h2>
      <div className="page-content">
        <div className="carousel-container">
          <div className='carousel-button'>
            <button className="previous-button" onClick={() => getPrevious()}>Previous</button>
          </div>
          <div className="carousel-content">
            <div className='carousel-image'>
              <img src={details?.sprites?.front_default} width='300'></img>
            </div>
            <div className='carousel-description'>
              <div>
                {carouselData[index]?.name}
              </div>
              {/* <a href={carouselData[index]?.url} target='_blank' className='description-link'>{carouselData[index]?.url}</a>
              <p>{details?.sprites?.front_default}</p> */}
            </div>
          </div>
          <div className='carousel-button'>
            <button className="next-button" onClick={() => getNext()}>Next</button>
          </div>
        </div>
        {/* <p>index: {index}</p> */}
      </div>
    </>
  )
};

export default Carousel;