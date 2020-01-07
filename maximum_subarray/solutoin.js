/*
@param {number[]} nums
@return {number}

*/

var maxSubArray = function(nums) {
    var previous = 0;
    var max = -Number.MAX_VALUE;

    for(var i = 0; i < nums.length; i++){
        // Here, we are setting previous either to the previous plus our current number or just the current number, which ever is greater
        previous = Math.max(previous + nums[i], nums[i]);

        // Here, we then determine if we have a new maximum based on the past maximum and the sum of the previous numbers or new previous sum
        max = Math.max(max, previous);
    }
    return max;
};