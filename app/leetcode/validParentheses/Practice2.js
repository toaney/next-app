'use client';

export default function Practice2(){
  console.log("practice parentheses 2")

  function isValidParentheses(s){
    let stack = [];
    let parens = "() {} []";
    let i = 0;

    while (i < s.length){
      stack.push(s[i]);
      i++

      let open = stack[stack.length - 2];
      let close = stack[stack.length - 1];

      let potParens = open + close;

      

      console.log("potParens: " + potParens)

      if (parens.includes(potParens)){
        stack.pop();
        stack.pop();
      }
    }
    return stack.length > 0 ? false : true
  }

  // console.log(isValidParentheses("()([])((({)}{}{[]})))"))
  console.log(isValidParentheses("(){[][][]()}"))


  // # TODO 
  // create a stack to check if parentheses are valid
  // use .contains method on a comparison string "() [] {}"
  // iterate over string
  // create duplicate of input
  // 


  return <h3>Practice 2</h3>
}