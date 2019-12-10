/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let lettermap = new Map();
    for(let i of s){
        if(lettermap.has(i)){
            lettermap.set(i, lettermap.get(i) + 1)
        } else {
            lettermap.set(i, 1);
        }
    }
    for(let i of t){
        if(!lettermap.has(i)){
            return false;
        } else {
            lettermap.set(i, lettermap.get(i) - 1);
            if(lettermap.get(i) < 0) {
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