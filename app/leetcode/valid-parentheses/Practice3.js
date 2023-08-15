'use client';

export default function Practice3(){

  // assumptions: 
  // we will always get a string input
  // input will only contain the following brackets: "(){}[]"

  function isValidParentheses(s){
    let stack = [];
    let validParentheses = "() {} []";


    // iterate over input array - while loop - while stack.length

    for (let i = 0; i < s.length; i++){
      // push item to stack
      stack.push(s[i])
      // check last two items of stack against predefined parentheses pairs
      console.log(stack);

      // while (stack.length){
        let open = stack[stack.length - 2];
        let close = stack[stack.length - 1];
        let potParens = open + close;
        console.log("potential parens" + potParens)

        if (validParentheses.includes(potParens)){
          stack.pop();
          stack.pop();
        }
      // }

      // - if valid parentheses includes our current potential parentheses, pop off the last two items form the stack
      // if (validParentheses.includes(potentialPair){
      //   stack.pop();
      //   stack.pop();
      // }

    }

    // 



    return stack.length > 0 ? false : true;
  }

  console.log(isValidParentheses("(){}[]"))



  return <h3>Practice 3</h3>
}