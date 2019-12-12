/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { // This function takes two strings
    if(s.length != t.length){ // Base case, if they're not equal in length they are not valid anagrams
        return false;
    }
    let lettermap = new Map(); // we are going to store letters as keys and counts as values
    for(let i of s){ // storing and counting
        if(lettermap.has(i)){
            lettermap.set(i, lettermap.get(i) + 1)
        } else {
            lettermap.set(i, 1);
        }
    }
    for(let i of t){ // checking the second and comparing to our map
        if(!lettermap.has(i)){ // if map doesn't have return false
            return false;
        } else {
            lettermap.set(i, lettermap.get(i) - 1);
            if(lettermap.get(i) < 0) { // anything under 0 will return false
               return false;
           }
        }
    }
    return true;
};

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // optimized solution using an array using the indexes matching character codes and storing counts. Faster look up time.
 // for letter in s we increase and for letter in t we decrease, if we find anything > 0 in our second loop we return false
var isAnagram2 = function(s, t) {
    let map = Array(256).fill(0)
    if(s.length!=t.length) {
        return false
    }
    for(let i =0; i<s.length;i++) {
        map[s.charCodeAt(i)]++;
        map[t.charCodeAt(i)]--;
    }
    for(let i =0; i<256;i++) {
        if(map[i]) {
            return false
        }
    }
    return true
};