'use client';

export default function Practice1({binarySearchTree, ...props}){
  // console.log("****** ORIGINAL ******")
  // console.log(binarySearchTree)

  function invertTree(root){
    console.log("root")
    console.log(root)

    if (root === null) return null;

    let left = invertTree(root.left);
    let right = invertTree(root.right);
    
    // let temp = root.left;
    // root.left = root.right;
    // root.right = temp;


    root.left = right;
    root.right = left;


    return root
  }

  console.log("****** INVERTED ******")
  console.log(invertTree(binarySearchTree.root))

  // function invertTree(root){
  //   console.log("start")
  //   console.log(root)


  //   let temp = root.left
  //   console.log("***temp***")
  //   console.log(temp)
  //   root.left = root.right
  //   root.right = temp
  // }
  // invertTree(binarySearchTree.root)

  return <h4>Practice 1</h4>
}