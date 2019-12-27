/*
 * @param {number[]} A
 * @return {number[]}
 */

// firstly we square all the values in the array then we use quicksort
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

// quickSort() is the main sorting function, with partition() as the helper function.
// quickSort() takes in an array, an integer designating left pointer, and an integer designating a right pointer
// we establish a variable to which we will be using as the partition, breaking up our array into two parts
// within the partition() function, we establish a pivot, in which we sort the values around
// on the left side of the pivot are all numbers less than the selected pivot, and on the right
// side are the the numbers greater than the pivot number
// parition sort is done on the values within the left and right pointer ranges passed into it
// partition sort returns the marker where the quickSort function splits the array range

function quickSort(array, left, right){ // takes in an array, a left index, and right index value
    var index; // initialize an index variable where we will store the partitioning index
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
    
    while (i <= j){ // while left value is less than or equal to the right value we will keep swapping
        while (array[i] < pivot){ // if the numbers are in the correct position, move the markers either right or left
            i++;
        }
        while(array[j] > pivot){
            j--;
        }
        if(i <= j){ // once the markers find a number to swap, swap them, and then increment
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i; // return the place we last swapped, this will be the index we partitioned
}

function swap(array, leftIndex, rightIndex){ // sawp function
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}