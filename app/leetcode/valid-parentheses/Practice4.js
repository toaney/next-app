'use client';

import React from 'react';

const Practice4 = () => {

  const validateParens = (s) => {
    let stack = []

    let validParens = '() {} []';

    // main loop
    for (let i = 0; i < s.length; i++) {

      stack.push(s[i]);
      console.log(stack)

      let potentialparens = stack[stack.length - 2] + stack[stack.length -1]
      console.log("potential parens")
      console.log(potentialparens)


      if ( validParens.includes(potentialparens)) {
        stack.pop()
        stack.pop()
      }

    }

    return stack.length? false : true
  }


  console.log(validateParens('({[])'))


  return <>
    <p>Practice 4</p>
  </>
}

export default Practice4;