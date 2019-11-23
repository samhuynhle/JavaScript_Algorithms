/*
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var errors = 0;
    var sorted = sorting(heights);
    console.log(heights);
    console.log(sorted);
    for(let i = 0; i < heights.length; i++){
        if(sorted[i] != heights[i]){
            errors++;
        }
    }
    return errors;
};

var sorting = function(array) {
    return array.slice(0).sort(function(a, b){return a-b});
}