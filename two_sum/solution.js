/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // we will be using ES6's Hash Map to solve this algorithm
var twoSum = function(nums, target) {
    let numberIndex = new Map();
    let result = [];

    for(let i = 0; i < nums.length; i++){
        if(numberIndex.has(target - num[i])){
            result.push(numberIndex.get(target -num[i]));
            result.push(i);

            return result;
        }
        numberIndex.set(num[i], i);

    }

    return result;
};