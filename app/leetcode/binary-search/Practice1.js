'use client';

export default function Practice1(){
  console.log("practice 1")
  // let array = [1, 4, 6, 3, 7, 3, 9, 2, 5, 8];
  // let target = 4;

  function findNumIndex(array, target){
    let left = array[0];
    let right = array[array.length - 1];
    let mid;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (array[mid] === target){
        return array[mid];
      };

      if (target < array[mid]){
        right = mid - 1;
        mid = Math.floor((mid / 2) - 1) 
      } else {
        left = mid + 1;
        mid = mid + Math.floor((right - mid) / 2)
      }

    }


  }


  findNumIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)

  return <h4>Practice 1</h4>
}