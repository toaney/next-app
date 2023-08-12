'use client';

export default function Practice3(){
  console.log("Practice3")

  let test1 = "abcabcbb";

  function longestSubstring(s){
    let windowStart = 0;
    let longestSub = 0;
    let soFar = {};

    for(let windowEnd = 0; windowEnd < s.length; windowEnd++){
      // let current = s[right]
      let right = s[windowEnd];

      // soFar[current] = soFar[current] ? soFar[current] + 1 : 1
      soFar[right] = soFar[right] + 1 || 1;

      console.log(right)
      console.log(soFar)


      while(soFar[right] > 1){
        let left = s[windowStart]
        // console.log(left, right)
        
        // if (s[left] === s[right]){
        //   soFar[s[left]] = soFar[s[left]] - 1
        // }
        if (soFar[left] > 1){
          soFar[left]--
        } else {
          delete soFar[left]
        }


        // left++ 
        windowStart++
      }

      // longestSub = longestSub.length > right - left + 1 ? longestSub : s.slice(right, left);
      longestSub = Math.max(longestSub, (windowEnd - windowStart) + 1)
    }



    console.log('longestSub: ', longestSub, ', index: ', windowStart);
    return longestSub
  }

  longestSubstring(test1)

  return<h3>Longest Substring</h3>
}