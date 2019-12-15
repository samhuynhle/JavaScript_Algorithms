/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // we will be using ES6's Hash Map to solve this algorithm as we will use the keys to store the number at each index and the value to store the index
var twoSum = function(nums, target) {
    let numberIndex = new Map(); // the keys will store the number at the index and the value will store the index the number was at
    let result = [];

    for(let i = 0; i < nums.length; i++){
        if(numberIndex.has(target - num[i])){ // check if our hashmap has the difference between the target and the current number we are at
            result.push(numberIndex.get(target -num[i])); // if it does we push to our results the index of the stored number
            result.push(i); // and the current index we are at

            return result; // then return right away as there's only one pair that will add up to the target
        }
        numberIndex.set(num[i], i); // otherwise add the number and it's index

    }

    return result;
};