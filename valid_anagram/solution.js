/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isAnagram = function(s, t) { // this function takes two strings to check if they are valid anagrams of each other
    if(s.length != t.length){ // firstly check if there's a difference in length
        return false;
    }
    let lettermap = new Map(); // we are using a hashmap object
    for(let i of s){ // store the letters as keys for the first string and get counts of how often those words appear
        if(lettermap.has(i)){ // if the hashmap has it just increment 
            lettermap.set(i, lettermap.get(i) + 1)
        } else { // other wise set it up with value of one
            lettermap.set(i, 1);
        }
    }
    for(let i of t){ // check the second string
        if(!lettermap.has(i)){ // if there's a char in this string not in our original, return false
            return false;
        } else {
            lettermap.set(i, lettermap.get(i) - 1);
            if(lettermap.get(i) < 0) { // if we reach a negative number, that means there was more count of such char
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
    let map = Array(256).fill(0) // use a map where the keys are equivalent to the char codes of each character
    if(s.length!=t.length) {
        return false
    }
    for(let i =0; i<s.length;i++) { // logic here is that if these we equal there would only be zero's in our hash map
        map[s.charCodeAt(i)]++; // for every char we increment the respective key for first string
        map[t.charCodeAt(i)]--; // for ever char we decrement the respective key for the second string
    }
    for(let i =0; i<256;i++) {
        if(map[i]) { // we are using how JavaScript reads the falsey of 0, all other numbers is truthy, thuse if we have any truths, we return false
            return false
        }
    }
    return true
};