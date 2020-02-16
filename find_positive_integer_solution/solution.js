/*
This is the CustomFunction's API interface.
You should not implement it, or speculate about its implementation
function CustomFunction() {

@param {integer, integer} x, y
@return {integer}
this.f = function(x, y) {
...
};


@param {CustomFunction} customfunction
@param {integer} z
@return {integer[][]}
*/

var findSolution = function(customfunction, z) { // takes in function and integer value z
    const equation = customfunction.f; // we establish the function so we can call it in our loop
    let result = []; // we store the results in an array that will hold arrays storing the x and y integers
    for (let i = 1; i <= z; i++) { // all results will be positive as stated in problem description
        for (let j = 1; j <= z; j++){ // need to do both
            if (equation(i,j) === z){
                result.push([i, j]); // if the result is equal to the z integer, push the pairing
            }
        }
    }
    return result;
};