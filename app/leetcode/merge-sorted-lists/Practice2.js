'use client';

export default function Practice2(props){
  let {list1, list2} = props
  console.log("Practice 2")

  function mergeLists(a, b){
    let l1 = a.head
    let l2 = b.head

    let dummy = new props.Node(-Infinity)
    let prev = dummy;

    console.log(dummy)

    console.log("****************")
    // while loop iteration - while neither l1 or l2 are null
    while (l1 && l2){
      if (l1.element <= l2.element){
        prev.next = l1;
        prev = l1;
        l1 = l1.next
      } else {
        prev.next = l2;
        prev = l2;
        l2 = l2.next
      }
    }

    if (!l1) prev.next = l2;
    if (!l2) prev.next = l1;


    console.log(dummy.next)
    return dummy.next

  }

  mergeLists(list1, list2)
  // console.log()

  return <h4>Practice 2</h4>
}