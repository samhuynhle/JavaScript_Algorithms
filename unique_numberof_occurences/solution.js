var uniqueOccurrences = function(arr) { // the function takes in an array of integers
    var map1 = new Map(); // we will be using hash map to keep track of the integer as keys, and the number of occurances as values
    for(var i of arr){ // run through the array to collect
        if(!map1.has(i)){
            map1.set(i, 1);
        } else {
            map1.set(i, map1.get(i) + 1);
        }
    }
    var check = map1.values(); // we extract an array of the occurances
    var set1 = new Set(); // we set up a Set so we can see if there were any duplicate number of occurances
    for(var i of check){
        if(!set1.has(i)){ // add it
            set1.add(i);
        } else { // or if already contains return false
            return false;
        }
    }
    return true;
};