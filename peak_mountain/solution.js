const peakIndexInMountainArray = A => {
    const prop = x => {
        if(A[x] > A[x + 1]) {
            return true;
        }
    }
    return lowerBound(A, prop);
};

const lowerBound = (arr, prop) => {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right){
        var mid = parseInt((left + right) / 2);
        if(prop(mid)){
            console.log("right", right);
           right = mid - 1;
        } else {
            left = mid + 1;
       }
    }
    return left;
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

