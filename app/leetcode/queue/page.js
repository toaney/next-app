'use client';

import React from 'react';

class Queue {
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }

  enqueue(item) {
    this.items[this.backIndex] = item
    this.backIndex++
    return item + " inserted"
  }

  dequeue() {
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }

  peek() {
    return this.items[this.frontIndex]
  }

  printQueue() {
    return this.items
  }

}

const myQueue = new Queue;

console.log(myQueue.enqueue(1))
console.log(myQueue.enqueue(2))
console.log(myQueue.enqueue(3))
console.log(myQueue.enqueue(4))
console.log(myQueue.enqueue(5))
console.log(myQueue.enqueue(6))

console.log(myQueue.dequeue())

console.log(myQueue.peek())

console.log(myQueue.printQueue())

const page = () => {
  return (
    <h4>Queue</h4>
  )
}

export default page;