'use client';

const LongestSubstring = () => {


  function findSubstring(s, k){
    let substringIndex = 0;
    let mostVowels = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let start = 0;
    let soFar = 0;


    for (let end = 0; end < s.length; end++){
      console.log(s[end])


      if (vowels.includes(s[end])){
        soFar += 1
      }

      if (end - start === k - 1){
        if (vowels.includes(s[start])){
          soFar -= 1
        }

  
        // helper function to check how many vowels are in the current string
            
        if (soFar > mostVowels){
          mostVowels = soFar;
          substringIndex = start;
        }

        start++
      }

      
      console.log(soFar)
    }

    console.log(`max index: ${substringIndex}, max vowels: ${mostVowels}`)
    return 
  }


  findSubstring('aeiou', 3);

  return(
    <>
      <h2>Longest Substring with vowels</h2>
    </>
  )
}

export default LongestSubstring;