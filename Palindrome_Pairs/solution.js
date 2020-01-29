// Approach 1: Brute Force

var palindromePair1 = (words) => {
    pairs = [];

    for(var i = 0; i < words.length; i++){
        for(var j = 0; j < words.length; j++){
            if(i == j) continue;
            var combined = words[i] + words[j];
            var reversed = reverseString(combined);
            if(combined == reversed){
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}

var reverseString = (string) => { // utilize split(), reverse(), and join() methods
    return string.split("").reverse().join("");
}

// Approach 2: Hashing
