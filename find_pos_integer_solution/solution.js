/*
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    const equation = customfunction.f;
    let result = [];
    for (let i = 1; i <= z; i++) {
        for (let j = 1; j <= z; j++){
            if (equation(i,j) === z){
                result.push([i, j]);
            }
        }
    }
    return result;
};