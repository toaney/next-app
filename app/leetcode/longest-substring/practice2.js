'use client';

import React from 'react';

export default function Practice2() {
  console.log("Longest Substring Practice2")

  function findLongestSubstringLength(s){
    let max = 0;
    let start = 0;
    let soFar = {};

    for (let end = 0; end < s.length; end++){
      let rightChar = s[end];
      soFar[rightChar] = soFar[rightChar] ? soFar[rightChar] + 1 : 1;

      while (soFar[rightChar] > 1){
        let leftChar = s[start];

        if(soFar[leftChar] > 1) {
          soFar[leftChar]--;
        } else {
          delete soFar[leftChar];
        } 
        start++
      }

      max = Math.max(max, (end - start) + 1)

    }

    console.log(max)
    return max
  }


  let str = "abcabcbb";
  findLongestSubstringLength(str);

  return <h3>Longest Substring Length - Practice2</h3>
}





// TO DO - pseudocode

// we will use the sliding two pointer...
// given string will always have a length of 1

// increment rightChar

// check if rightChar exists in our soFar tracker
// if rightChar exists, increment rightChar, otherwise add rightChar entry

// check if we have any duplicates in our soFar tracker - we can do this by checking if rightChar > 1;
// while loop 
//  - runs when right soFar[rightChar] > 1
//  - we will shift leftChar to the right until right Char no longer greater than 1
//  - leftChar shifts by incrementing the index - leftChar++
//  - check if soFar(rightChar) is still greater than 1; if yes, shift leftChar to the right

// update our running max variable
//  - compare local str length with our global max
//  - obtain str length by subtracting rightChar from leftChar
//    - may need to modify returned value due to a string's zero index
//    - e.g. 0, 1, 2, 3, 4, 5, 6, 7
//      - subtracting zero from five returns five (e.g. "5 - 0 = 5"), a string with index values zero to five is actually six digits long. 
//      - may need to add 1 to the returned value for local max

//  - use Math.max to determing if loval str length is greater than global max, update accordingly

//  - return max

