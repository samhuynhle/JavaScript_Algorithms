const removeOuterParentheses = function(S) {
    var stack = [] // utilize array as a stack --> push and pop for LIFO
    var result = '' // string to return
  
    for (let i = 0; i < S.length; i++) { // iterate through the chars of the string
      if(S[i] === '(') { // if we get an open paren, then push to our stack
        stack.push('(')      
      }
  
      if(stack.length > 1) // Logically, we are within a set of valid parentheses, when we have the first
                           // opening paren, addittional opening parens will also be in our stack
        result += S[i]
  
      if (S[i] === ')'){ // we pop when we get a closing paren. We close off the outermost when we pop
                         // all of our open parens. We are then ready to pop for the next opening.
          stack.pop()
      }     
    }
  
    return result
  }