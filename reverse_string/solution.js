/*

Simple: Reverse a string
If a string "hello" reverse it in place to be "olleh"

*/

// Iterative Approach
var reverseString = function(s) {
    left = 0;
    right = s.length - 1;
    
    while(left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
    
    console.log(s)
};

// Recursive Approach
var reverseStringRDriver = function(s) {
    reverseStringRFunction(s, 0, s.length - 1)
    console.log(s)
};

var reverseStringRFunction = (s, left, right) => {
    if (left >= right) {
        return
    } else {
        temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        reverseStringR(s, left + 1, right - 1);
    }
}