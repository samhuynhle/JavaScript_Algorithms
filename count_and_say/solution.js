/*
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
    if(n == 1){
        return '1';
    }
    let prev = countAndSay(n - 1).split('');

    let result = '';
    let lastIndex = -1;
    for(let i = 0; i < prev.length; i++){
        if(prev[i] !== prev[i+1]){
            result += (i - lastIndex) + prev[i];
            lastIndex = i;
        }
    }
    return result;
}