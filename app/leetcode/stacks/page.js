'use client';

import React from 'react';

const Page = () => {
  // const stackArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  class Stack {
    constructor () {
      this.stackArray = [];
    }

    //add element
    add(element) {
      return this.stackArray.push(element);
    }

    //remove element from stack
    remove(element) {
      if (this.stackArray.length > 0) {
        return this.stackArray.pop();
      }
    }

    peek(element) {
      if (this.stackArray.length > 0) {
        return this.stackArray[this.stackArray.length -1];
      }
    }
  }

  let stack = new Stack();
  stack.add(1)
  stack.add(2)
  stack.add(3)
  stack.add(4)
  stack.add(5)
  stack.add(6)
  stack.add(7)
  stack.add(8)

  console.log(stack.stackArray)
  console.log("*********")
  // console.log(stack.remove())
  console.log(stack.peek())
  console.log(stack.stackArray)



  return (
    <h3>Stack</h3>
  )
}

export default Page;