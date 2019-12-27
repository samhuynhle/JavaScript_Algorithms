/*
 * @param {number} N
 * @return {number}
 *
*/

// fibonacci is a sequence where current is equal to current - 1 plus current - 2 within the sequesequenc
// we use recursive function to call on our function as needed, with base cases.
var fib = function(N) {
    if(N == 0){
        return 0;
    }
    if(N == 1){
        return 1;
    }
    return fib(N - 1) + fib(N - 2);
};
