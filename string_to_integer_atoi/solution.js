/*
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) { // function takes in a string, that can include any characters and whitespace
    var str1 = str.trim(); // remove white space from both sides (front and back) of the string
    var arr = []; // prepare array to store characters
    if(!/[0-9]/.test(str1[0]) && str1[0] !== "+" && str1[0] !== "-") return 0; // The first set of characters in this string must be +, -, or numbers, else return 0
    if((str1[0] === "+" || str1[0] === "-") && str1[1] != parseInt(str1[1])) return 0; // if there is a + or -, check the second char, if it's not a number then return 0
    if(str1[0] === "+" || str1[0] === "-"){
        arr.push(str1[0]); // if the char is a + or - push it into our array
        for(var i = 1; i < str1.length; i++){ // then we check the rest of the string
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]); // since we passed the second conditional, we can push these into the array, they will be numbers 
            else break; // once we hit a non numberal, then break the loop
        }
    }else{ // if the first char isn't a plus or minus, do a loop for numerals only, first conditional takes care of the checking
        for(var i = 0; i < str1.length; i++){
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]);            
            else break;
        }
    }    
    if(str1.length === 1 && (str1[0] === "+" || str1[0] === "-")) return 0; // if there's only a + or -, just return 0
    var num = parseInt(arr.join("")); // join the array then parse into integer
    if(num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1; // edge cases
    if(num < Math.pow(-2, 31)) num = Math.pow(-2, 31); // edge cases
    return num;   
};