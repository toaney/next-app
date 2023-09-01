'use client';

import React, {useEffect, useState} from 'react';

const page = ({params}) => {
  console.log('^^^^^^^^^^^^^^^')
  console.log(params["modifying-urls"])

  const [filter, setFilter] = useState('rank');
  // const [urlChanged, setUrlChanged] = useState(false);

  function updateUrl(filter, url){
    // setUrlChanged(true)
    setFilter(filter)

    if (typeof (history.replaceState) != "undefined") {
      var obj = {
       Url: url
      };
      
      history.replaceState(obj, filter, obj.Url);
     }
  }

  // useEffect(()=>{
  //   console.log('!!!!!!!!!!!!!')
  //   console.log(window.location.href.split('/'))

  //   let currentUrl = window.location.href.split('/')
  //   let urlfilter = currentUrl[currentUrl.length - 1]

  //   if (urlfilter === 'rank' || filter === 'name' || filter === 'points' || filter === 'age') {
  //     setFilter(urlfilter)
  //   }
  //   console.log(urlfilter)

  //   setUrlChanged(false)
  // },[urlChanged])



  // window.addEventListener('popstate', function (event){
  //   console.log('**************')
  //   console.log(event.state)
  // });

  useEffect(()=>{
    let currentUrl = window.location.href.split('/')
    let urlFilter = currentUrl[currentUrl.length - 1]
    console.log(urlFilter)
    setFilter(urlFilter)
  },[])

  return(
    <>
      <h3>modifying urls with react</h3>
      <button onClick={()=>{updateUrl('rank', 'http://localhost:3000/interview-questions/modifying-urls/rank')}}>Rank</button>
      <button onClick={()=>{updateUrl('name', 'http://localhost:3000/interview-questions/modifying-urls/name')}}>Name</button>
      <button onClick={()=>{updateUrl('points', 'http://localhost:3000/interview-questions/modifying-urls/points')}}>Points</button>
      <button onClick={()=>{updateUrl('age', 'http://localhost:3000/interview-questions/modifying-urls/age')}}>Age</button>
      <div>
        <p>current filter: {filter}</p>
      </div>
    </>
  )
}

export default page;