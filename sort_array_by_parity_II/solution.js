/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let oddIndex = A.length - 1; // We establish a runner for the odd indexes
    for(let evenIndex = 0; evenIndex < A.length; evenIndex += 2) { // we will run through the array with an even index, so plus two each iteration
        if (A[evenIndex] % 2 != 0 ) { // if the even index does not have an even value
            while (A[oddIndex] % 2 != 0) { // we will look for one that is in the odd indexes
                oddIndex -= 2; // if the current odd index is odd then move the marker
            }
            swap(A, evenIndex, oddIndex); // then we swap, only if the even index is not working
        }
    }
    return A;
};
    
var swap = function(A, even, odd) { // swap function using a temp
    var temp = A[even];
    A[even] = A[odd];
    A[odd] = temp;
};