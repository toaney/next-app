'use client';

export default function Practice1(s, wordDict){
  console.log("practice1");

  function wordBreak(s, wordDict) {
    const table = new Array(s.length + 1).fill(false);

    table[0] = true;
    console.log(table)
  
    for(let i = 0; i < table.length; i++){
      if (table[i] === false) continue;
      for (let j = 0; j < table.length; j++){
        console.log(s.slice(i, j))
        if (wordDict.includes(s.slice(i, j))){
          console.log(true)
          table[j] = true
        }
      }
      console.log(table)
    }
    
    return table[table.length - 1];
  }

  // console.log(wordBreak("leetcode", ["leet", "code"]))
  console.log(wordBreak("catsands", ["cats", "dog", "sand", "and", "cat"]))




  return<h4>Practice1</h4>
}