/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A = square(A); // helper function to square all the values in place
    A = quickSort(A, 0, A.length -1); // helper function to sort the array, we are using quick sort method
    
    return A;
};

function square(array){ // function to iterate through each object and assign the square value, returns the original array with new items
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}

function quickSort(array, left, right){ // takes in an array, a left index, and right index value
    var index; // initialize an index variable where we will store the partitioning
    if(array.length > 1){ // base case for quickSort recursion, this will stop when the array length is down to 0
        index = partition(array, left, right); // the index will store the value we will use for further sorting
        
        if(left < index - 1){
            quickSort(array, left, index - 1); // continue to sort if there are still values to the left
        }
        
        if(index < right){
            quickSort(array, index, right); // continue to sort if there are still values to the right
        }
    }
    return array; // return the sorted array
}

function partition(array, left, right){
    var pivot = array[Math.floor((right + left)/2)]; // we are finding the pivot value we will sort around, all values less will be to the left, all values greater will be to the right
    var i = left;
    var j = right;
    
    while (i <= j){
        while (array[i] < pivot){
            i++;
        }
        while(array[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i; // return the place we last swapped
}

function swap(array, leftIndex, rightIndex){ // sawp function
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}