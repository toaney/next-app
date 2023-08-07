'use client'

import React from 'react'

const page = () => {
  console.log("parens")

  function isValidParens(input){
    const stack = [];
    const parens = '() {} []';
    let i = 0;

    while(i < input.length){
      console.log(i)
      console.log(input[i])
      stack.push(input[i]);
      i++

      console.log(stack)


      let open = stack[stack.length - 2];
      let closed = stack[stack.length - 1]

      let potParens = open + closed; 

      if(parens.includes(potParens)) {
        console.log('popped', potParens)
        stack.pop();
        stack.pop();
      }
    }

    return stack.length === 0;
  }





  console.log(isValidParens("()([])((({)}{}{[]})))"))

  return (
    <h4>Parens</h4>
  )
}

export default page;