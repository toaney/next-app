'use client'

export default function Practice1({list2, ...props}){
  let {list1} = props;

  let lista = list1.head;
  let listb = list2.head;

  function mergeLists(l1, l2){
 
    let dummy = new props.Node(-Infinity);
    let prev = dummy


    while (l1 && l2){
      if (l1.element <= l2.element){
        prev.next = l1;
        prev = l1
        l1 = l1.next
      } else {
        prev.next = l2;
        prev = l2;
        l2 = l2.next;
      }
      
    }

    if (!l1)prev.next = l2;
    if (!l2)prev.next = l1;


    console.log(dummy.next)

    return dummy.next;
  }

  mergeLists(lista, listb)



  return <h4>Practice 1</h4>
}