/*
 * @param {number[]} heights
 * @return {number}
 */

// Unpptimized solution, we are using builting sort function in Array class for javascript.
var heightChecker = function(heights) { // main function
    var errors = 0; // establish error counter
    var sorted = sorting(heights); // creating a new array that is the original array sorted
    for(let i = 0; i < heights.length; i++){ // loop through both arrays and compare
        if(sorted[i] != heights[i]){ // if there are differences from the original to the sorted then that's an error and we add it
            errors++;
        }
    }
    return errors; // return number of errors
};

var sorting = function(array) { // helper function to sort the array
    return array.slice(0).sort(function(a, b){return a-b}); // needed to splice as the .sort method changes in place, also needed the modify the compare function wihtin sort method to account for numbers. The splice creates new memory space for a new array.
}

// Thoughts to optimize:
// Build a sort function: as we sort we count then return the count of times we had to sort
// Also on leet code, the run times is varying too much due to the built in method, no garunteed sort way I believe.