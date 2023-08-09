'use client';

export default function DoubleArrayQueue(){

  class Queue {
    constructor(){
      this.pushStack = [];
      this.popStack = [];
    }

    push(item){
      this.pushStack.push(item)
    }

    pop(){
      if(!this.popStack.length){
        //move pushStack items to popStack
        while (this.pushStack.length){
          this.popStack.push(this.pushStack.pop())
        }
      }

      return this.popStack.pop()
    }

    peek(){
      if(!this.popStack.length){
        //move pushStack items to popStack
        while (this.pushStack.length){
          this.popStack.push(this.pushStack.pop())
        }
      }

      console.log(this.popStack[this.popStack.length - 1])

    }

    empty(){
      return !this.pushStack.length && !this.popStack.length
    }
  }


  const myQueue = new Queue; 
  console.log(myQueue.empty());
  myQueue.push(1);
  myQueue.push(2);
  console.log(myQueue)
  myQueue.pop();
  myQueue.push(3);
  myQueue.push(4);
  myQueue.peek();
  myQueue.pop();
  myQueue.peek();
  console.log(myQueue.empty());

  console.log(myQueue)

  return <h2>Double Array Queue</h2>
}