/*
 * @param {number[]} heights
 * @return {number}
 */

// Unpptimized solution, we are using builting sort function in Array class for javascript.
var heightChecker = function(heights) {
    var errors = 0;
    var sorted = sorting(heights);
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

// Thoughts to optimize:
// Build a sort function: as we sort we count then return the count of times we had to sort
// Also on leet code, the run times is varying too much due to the built in method, no garunteed sort way I believe.