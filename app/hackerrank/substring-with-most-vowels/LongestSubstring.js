'use client';

const LongestSubstring = () => {


  function findSubstring(s, k){
    let longestSubstringIndex = 0;
    let mostVowels = 0;
    let mostVowelsStart = 0
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let start = 0;
    let soFar = '';
    let soFarVowelCount;

    for (let end = 0; end < s.length; end++){
      soFar = soFar + s[end];

      if (end - start === k - 1){
        if (vowels.includes(s[end])){
          soFarVowelcount += 1

          
        }

        // helper function to check how many vowels are in the current string
      }
    }
  }


  findSubstring('alkbjoeisfeewoagioe', 5);

  return(
    <>
      <h2>Longest Substring with vowels</h2>
    </>
  )
}

export default LongestSubstring;