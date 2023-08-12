'use client';

import React from 'react';

export default function Practice1() {
  console.log("longest Substring")



  function findLongestSubstring(s){
    let max = 0;
    let windowStart = 0;
    const soFar = {};
  
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++){

      console.log(soFar)

      let rightChar = s[windowEnd];
      soFar[rightChar] = soFar[rightChar] + 1 || 1;

      while(soFar[rightChar] > 1) {
        let leftChar = s[windowStart];
      
        if(soFar[leftChar] > 1) {
          soFar[leftChar]--;
        } else {
          delete soFar[leftChar];
        }
      
        windowStart++;
      }
  
      max = Math.max(max, (windowEnd - windowStart) + 1)
  
  
  
    }

    console.log(max)
    console.log('longestSub: ', max, ', index: ', windowStart);
    return max 
  }


  // const str = "aljboealjaslfkoealf";
  const str2 = "abcabcbb";

  findLongestSubstring(str2)

  return <h3>Longest Substring Length</h3>


}