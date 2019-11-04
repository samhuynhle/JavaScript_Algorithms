// Will need to check the characters of string J and S
// If they match, we will need to increase the counter

// O(N^2) Solution
var numJewelsInStones = function(J, S) {
    var count = 0;
    for(var jchar of J){
        for(var schar of S){
            if(jchar == schar){
                count++;
            }
        }
    }
    return count;
};

// Optimized with set

var numJewelsInStones = function(J, S) {

    if(S.length==="" && J.length==="" ) return 0;
    if(S.length===0 || J.length===0) return 0;

    var count = 0;
    const set1 = new Set(J.split());
    for(var schar of S){
        if(set1.has(schar)){
            count ++;
        }
    }
    return count;
}