"use client";

export default function Practice2(){
  console.log("Practice 2");

  function findDuplicates(arr){
    let dict = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++){
      if (dict[arr[i]] === 1){
        dict[arr[i]] = dict[arr[i]] + 1;
        duplicates.push(arr[i])
      } else {
        dict[arr[i]] = 1;
      }
    }

    console.log(duplicates)
  }

  findDuplicates([1, 2, 3, 4, 2, 4, 5, 6, 7, 1, 4])
  // findDuplicates([])

  return <h4>Practice 2</h4>
}