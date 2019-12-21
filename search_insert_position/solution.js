/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function(nums, target) {
//     let index = 0;

//     while(nums[index] < target){
//             index++;
//     }

//     return index;
// };

// Binary Search
var searchInsert = function(nums, target) {
    var left = 0, right = nums.length;
    while(left < right) {
        var middle = left + Math.floor((right - left)/2);
        if(target > nums[middle]){
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}