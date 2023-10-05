'use client';

import React from 'react';

const Practice3 = () => {
  // given an array and a target, return index of numbers that add up to the target value
  // return -1 if no numbers add up to the target value



  const findTwoSum = (arr, target) => {
    let result = [];
    let hash = {};

    // create hash
      for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        hash[val] = i
      }

      console.log(hash)

    // iterate through array and check for compliment

      for (let i = 0; i < arr.length; i++){
        let compliment = target - arr[i];
        if ( hash[compliment] && hash[compliment] !== i) {
          console.log([hash[compliment], i])
          result = [hash[compliment], i]
        }
      }



    return result.length? result : -1;
  }

  console.log(findTwoSum ([4, 3, -1, 7], 6))


  return (
    <>
      <div>
        Practice3
      </div>
    </>
  )
}

export default Practice3;