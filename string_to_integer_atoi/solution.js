/*
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) { // function takes in a string, that can include any characters and whitespace
    var str1 = str.trim(); // remove white space from both sides (front and back) of the string
    var arr = []; // prepare array to store characters

    // The first set of characters in this string must be +, -, or numbers, else return 0
    if(!/[0-9]/.test(str1[0]) && str1[0] !== "+" && str1[0] !== "-"){
        return 0; 
    }

    // if there is a + or -, check the second char, if it's not a number then return 0
    if((str1[0] === "+" || str1[0] === "-") && str1[1] != parseInt(str1[1]))
    {
        return 0;
    }

    // if hte first character we have is equal to a + or -, then we push it to our array
    if(str1[0] === "+" || str1[0] === "-"){
        arr.push(str1[0]);
        for(var i = 1; i < str1.length; i++){ // then we check the rest of the string, we already know the following will be a number, since we passed the second conditional
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]); // we can push these into the array, they will be numbers 
            else break; // once we hit a non numberal, then break the loop
        }
    } else { // if the first char isn't a plus or minus, do a loop for numerals only, we know it's numerals due to the first conditional
        for(var i = 0; i < str1.length; i++){
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]);            
            else break;
        }
    }    
    if(str1.length === 1 && (str1[0] === "+" || str1[0] === "-")){ // if there's only a + or -, just return 0, since there was no numerals following
        return 0;
    }
    var num = parseInt(arr.join("")); // join the array into a string then parse into integer
    if(num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1; // edge cases
    if(num < Math.pow(-2, 31)) num = Math.pow(-2, 31); // edge cases
    return num;   
};