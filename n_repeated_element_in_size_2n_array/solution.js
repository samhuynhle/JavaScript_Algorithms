var repeatedNTimes = function(A) {
    var set1 = new Set();
    for(var i of A){
        if(!set1.has(i)){
            set1.add(i);
        } else {
            return i;
        }
    }
};