/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var previous = 0;
    var max = -Number.MAX_VALUE;

    for(var i = 0; i < nums.length; i++){
        previous = Math.max(previous + nums[i], nums[i]);
        max = Math.max(max, previous);
    }
    return max;
};