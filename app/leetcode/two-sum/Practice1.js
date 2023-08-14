'use state';

export default function Practice1(){

//   /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

  var twoSum = function(nums, target) {
    const lowNums = [];
    const output = [];
  
    for (i = 0; i < nums.length; i++){
        let current = nums[i];
            if (lowNums.length){
                for (j = 0; j < lowNums.length; j++){
                    if (target - lowNums[j].number === current){
                        return [lowNums[j].index, i]
                        
                    }
                }
            }
            lowNums.push({number: current, index: i})
    }
  
    const dictionary = [];
  
    return ( nums.map( (item) => {
        
    }))
  
  };



  return <h3>Practice1</h3>
}