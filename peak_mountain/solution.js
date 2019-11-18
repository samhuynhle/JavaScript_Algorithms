const peakIndexInMountainArray = A => { // Take in array
    const prop = x => { // establish a function to pass into helper function
        if(A[x] > A[x + 1]) { // if value at index x is less then value at index + 1 is the condition, then return true
            return true;
        }
    }
    return lowerBound(A, prop);
};

const lowerBound = (arr, prop) => {
    var left = 0; // set left index
    var right = arr.length - 1; // set right index
    while (left <= right){ // while loop condition: while left is less than or equal to right continue
        var mid = parseInt((left + right) / 2); // we establish a mid point every iteration
        if(prop(mid)){ // if the value at mid is less than the value to the right
            console.log("right", right);
           right = mid - 1; // we move the right index to the value left of mid
        } else {
            left = mid + 1; // otherwhise we move the left value to the right of mid
       }
    } // our loop will continue, either moving the right or left index
    return left; // we return the left value, which is where the peak of the mountain is
}

const upperBound = (arr, prop) => {
    var left = 0;
    var right = arr.length - 1;
    while(left <= right){
        var mid = (left + (right - left)) /2;
        if(prop(mid)){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

