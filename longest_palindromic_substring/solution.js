/*
 * @param {string} s
 * @return {string}
 */

/*
Solution - Brute Force Approach
1. Get all possible starting and edning positions for a substrin
2. Verify if each are palindrome
3. retain longest palindrome

Issue: time complexity is O(n^3)

Solution = Dynamic Programming
We need to avoid uncessary recomputaiton while validating palindromes
We define P(i, j) as following:

P(i,j) = true, if the substring Si...Sj is a palindrome
       = false, if they are not

Therefore,

P(i, j) = (P(i+1, j-1) and Si == Sj)

Base cases are:
P(i, i) = true
P(i, i+1) = (Si == Si+1)

*/

var longestPalindrome = function(s) {
    if(s.length <= 1) return s; // this is the base case for strings with only one char

    // we need to setup our 2d array for dynaimc programming, this will keep track of the
    // results on wether range(i, j) can become palindrome or not, where
    // i, j denotes start and edn index of the given string s.
    const dp = [...new Array(s.length +1).map(_ => new Array(s.length + 1).fill(false))];
    let lps = '';

    for(let i = 0; i < s.length; i++){
        dp[i][i]=true;
        lps = s[i];
    }
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++){
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    return lps;
};