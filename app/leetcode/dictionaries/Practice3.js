"use client";

export default function Practice3(){
  console.log("Practice 3")

  function findDuplicates(nums){
    let result = [];

    for ( let i = 0; i < nums.length; i++ ){

      let idx = Math.abs(nums[i]) - 1;
      let val = nums[idx];

      if (val < 0) {
        result.push(Math.abs(nums[i]));
      } else {
        nums[idx] = - nums[idx];
      }
    }

    console.log(result)
    return result
  }

  findDuplicates([1, 2, 3, 4, 2, 4, 5, 6, 7, 1])

  return<h4>Practice 3</h4>
}