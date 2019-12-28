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

// fibonacci using dynamic programming

var fib = function(N) {
    var mem = new Array(N).fill(0);
    return memFib(N, mem)
};

var memFib = function(n, mem) {
    console.log(mem);
    console.log(n);
    if (!mem[n]){
        if (n < 2){
            var result = n;
        } else {
            var result = memFib(n - 2, mem) + memFib(n - 1, mem)
        }
        mem[n] = result;
    }
    return mem[n]
}