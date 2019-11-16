var selfDividingNumbers = function(left, right) {
    const nums = []; // Collecting numbers for the output
    
    for(; left <= right; left++) { // We are starting at variable left, thus first param for for loop
                                   // is not needed. Left will increment by 1.
        if((left % 10 !== 0) && checkNumber(left)) { // Self dividing numbers are not allowed to contain the                                                      // digit zero.
            nums.push(left); // if number passes the conditionals, push to collection 'nums'
        }        
    }    
    return nums; // This is what we are returning
};

function checkNumber(num) {
    const charArray = num.toString().split(''); // Convert the integer into string and then split into
                                                // an array so we an iterate through the string
    
    for(const c of charArray) { // Loop through each character from the current integer
        if(num % parseInt(c) !== 0) { // If the num isn't divisible by the character then return false
            return false;
        }          
    }	
    return true; // this return true check off the second conditional
}