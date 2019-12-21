/*
@param {number} n
@return {string}
*/

/*

Our base case for this algorithm is when n = 1, we return '1'.
The next integer "reads as it is", as in, n = 2, we return 'one 1' --> '11'.
The next integer n = 3, we return 'two 1's' --> '21'.

This algorithm, we are working with strings and reading it as we progress.

*/

var countAndSay = function(n) {

    // Base case, when n = 1, we return '1'
    if(n == 1){
        return '1';
    }

    // We restore the strings we have in the prior n value
    let prev = countAndSay(n - 1).split('');

    let result = '';
    let lastIndex = -1;

    // For every recursive call we are reviewing the previous characters, to build a new result
    for(let i = 0; i < prev.length; i++){
        
        // if the current character we are at doesn't equal the next, we add in front of it the value that is i - lastIndex then the current value.
        if(prev[i] !== prev[i+1]){
            result += (i - lastIndex) + prev[i];
            lastIndex = i;
        }
    }
    return result;
}