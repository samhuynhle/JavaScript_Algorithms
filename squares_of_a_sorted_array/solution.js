/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A = square(A);
    A = quickSort(A, 0, A.length -1);
    
    return A;
};

function square(array){
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}

function quickSort(array, left, right){
    var index;
    if(array.length > 1){
        index = partition(array, left, right);
        
        if(left < index - 1){
            quickSort(array, left, index - 1);
        }
        
        if(index < right){
            quickSort(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right){
    var pivot = array[Math.floor((right + left)/2)];
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
    return i;
}

function swap(array, leftIndex, rightIndex){
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}