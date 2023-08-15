'use client';

import Practice1 from './Practice1';

export default function page(){
  console.log("Linked List Practice 1")

  class Node{
    constructor(element){
      this.element = element;
      this.next = null
    }
  }

  class LinkedList { 
    constructor(){
      this.head = null;
      this.size = 0;
    }

    size() {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next
      }
    }

    add(element){
      var node = new Node(element);

      var current;

      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next
        }

        current.next = node;
      }
      this.size++;
    }

    insertAt(element, index){
      if (index < 0 || index > this.size){
        return console.log("Please enter a valid index.");
      } else {
        var node = new Node(element);
        var curr, prev;

        curr = this.head;

        if (index == 0){
          node.next = this.head;
          this.head = node;
        } else {
          curr = this.head;
          var it = 0;

          while (it < index){
            it++;
            prev = curr;
            curr = curr.next
          }

          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
    }

    removeFrom(index) {
      if (index < 0 || index >= this.size){
        return console.log("Please Enter a valid index")
      } else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        if (index === 0) {
          this.head == curr.next
        } else {
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }

          prev.next = curr.next;
        }
        this.size--;

        return curr.element
      }
    }

    removeElement(element){
      var current = this.head;
      var prev = nulll;

      while (current != null) {
        if (current.element === element){
          if (prev == null){
            this.head = current.next;
          } else {
            prev.next = current.next
          }
          this.size--;
          return current.element;
        }
        prev = current;
        current = current.next;
      }
      return -1;
    }

    indexOf(element){
      var count = 0;
      var current = this.head;

      while (current != null) {
        if (current.element == element) {
          return count;
        }
        count++
        current = current.next
      }
      return -1
    }

    isEmpty() {
      return this.size == 0
    }

    size_of_list(){
      console.log(this.size);
    }

    printList(){
      var curr = this.head;
      var str = "";
      while (curr) {
        str += curr.element + " ";
        curr = curr.next;
      }
      console.log(str);
    }
  }

  // let node1 = new ListNode(2)
  // let node2 = new ListNode(5)
  // node1.next = node2

  
  let list1 = new LinkedList()
  // console.log("is this List Empty ? " + list.isEmpty())

  list1.add(1)
  list1.add(2)
  list1.add(4)

  // list1.printList()

  let list2 = new LinkedList();
  list2.add(1)
  list2.add(3)
  list2.add(4)
  list2.add(5)

  // list2.printList();
  // console.log(list2)

  // console.log(list.size)
  // // console.log(list)

  // console.log("index of 3 " + list.indexOf(3))

  // console.log("is this List Empty ? " + list.isEmpty())

  // console.log(list.removeFrom(2));
  // list.printList()


  return(
    <>
      <h2>Merge two sorted lists</h2>
      <Practice1 list1={list1} list2={list2} Node={Node} />
    </>
  )
}