'use state';

export default function Practice2(){
  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  // You may assume that each input would have exactly one solution, and you may not use the same element twice.
  // You can return the answer in any order.
  
  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  let nums = [2,7,11,15];
  let target = 9;

  let nums2 = [3, 2, 4];
  let target2 = 6;

  let nums3 = [3, 2, 7, 9, 5];
  let target3 = 6;

  function findTwoSum(nums, target){
    console.log("nums" + nums)

    // let hash = nums.reduce((item, index) => ({item, index}))

    // for (let i = 0; i < nums.length; i++){
    //   hash[nums[i]] = i;
    // }

    // Object.assign({}, nums)

    let hash = nums.reduce((accumulator, v, i, arr) => ({...accumulator, [v]: arr.slice(i)}), {})

    console.log("hash " + JSON.stringify(hash))

    for (let i = 0; i < nums.length; i++){
      let compliment = target - nums[i];
      if (hash[compliment] && hash[compliment] !== i ){
        return [hash[compliment], i]
      }
    }

    return ("no matches found")


  }

  console.log(findTwoSum(nums2, target2));

  return <h3>Practice2</h3>
}