// Will need to check the characters of string J and S
// If they match, we will need to increase the counter

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

// Optimized solution using set's to be used as look up, quicker than array.

var numJewelsInStones = function(J, S) { // Takes in two strings J and S, which we will review their characters

    if(S.length===0 && J.length===0 ) return 0; // conditionals for quick sets, if both have length 0, return 0
    if(S.length===0 || J.length===0) return 0; // if either have length 0, return 0, since if there's a zero that means no jems

    var count = 0; // initialize a count
    const set1 = new Set(J.split()); // Create a new set that contains J
    for(var schar of S){ // sift through each character of s and see if it matches any of the characters in J
        if(set1.has(schar)){
            count ++;
        }
    }
    return count;
}