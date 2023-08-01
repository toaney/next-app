"use client";

import React from 'react';

export default function page (){

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(nums.slice(nums.length - 1))
console.log(nums.pop())

  return(
    <>
      <h3>Slice</h3>
    </>
  )
}