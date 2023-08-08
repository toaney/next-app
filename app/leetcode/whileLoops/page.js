'use client'

export default function Page() {
  console.log("while loops")

  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, ,8, 9];

  let i = 0; 

  while (i < numArray.length){
    i++;

    if (numArray[i] === 6) break;

    console.log(numArray[i])

  }



  return <h4>While Loops</h4>
}