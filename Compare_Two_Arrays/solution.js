const compareTwoArrays = (array1, array2) => {
    var hashMap = new Map();

    for(var i of array1){
        if(!hashMap.contains(i)){
            hashMap.set(i, true);
        }
    }

    for(var j of array2){
        if(hashMap[j]){
            return true;
        }
    }

    return false;
}

const CompareTwoArrays = (array1, array2) => {
    return array1.some(item => array2.includes(item));
}