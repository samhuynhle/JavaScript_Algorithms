var uniqueOccurrences = function(arr) {
    var map1 = new Map();
    for(var i of arr){
        if(!map1.has(i)){
            map1.set(i, 1);
        } else {
            map1.set(i, map1.get(i) + 1);
        }
    }
    var check = map1.values();
    var set1 = new Set();
    for(var i of check){
        if(!set1.has(i)){
            set1.add(i);
        } else {
            return false;
        }
    }
    return true;
};