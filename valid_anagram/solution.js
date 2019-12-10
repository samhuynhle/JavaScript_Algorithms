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