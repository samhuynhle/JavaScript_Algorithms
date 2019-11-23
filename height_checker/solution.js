/*
 * @param {number[]} heights
 * @return {number}
 */

// Unpptimized solution, we are using builting sort function in Array class for javascript.
var heightChecker = function(heights) { // main function
    var errors = 0; // establish error counter
    var sorted = sorting(heights); // creating a new array that is the original array sorted
    for(let i = 0; i < heights.length; i++){ // loop through both arrays and compare
        if(sorted[i] != heights[i]){
            errors++;
        }
    }
    return errors; // return number of errors
};

var sorting = function(array) { // helper function to sort the array
    return array.slice(0).sort(function(a, b){return a-b}); // needed to splice as the .sort method changes in place, also needed the modify the compare function wihtin sort method to account for numbers
}