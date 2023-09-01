'use client';

import React from 'react';

const page = (() => {
  // fetch("https://pokeapi.co/api/v2/pokemon/ditto", {method: 'GET'})
  //   .then((response) => {
  //     console.log("success")
  //     console.log(response)
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data)
      
  //   }).catch((err) => {
  //     console.log(err)
  //   })

  const fetchData = async function(){
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      if(!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch(error) {
      console.error(error)
    }
  }

  fetchData();

  return(
    <>
      <h3>API Request</h3>
    </>
  )

})


export default page;