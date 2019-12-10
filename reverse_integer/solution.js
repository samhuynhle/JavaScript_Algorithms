var reverse = function(x) {
    let negative = x < 0; // are keeping track if the variable passed in is negative
    let result = 0; // 

    if(negative){
        x *= -1;
    }

    while(x > 0){ // this is reversing the integer
        result = (result * 10) + (x % 10); // multiply reverse by 10 then add the remainder of x
        x = Math.floor(x / 10); // then we chop off the end
    }

    if(result > (2 ** 31 - 1)) { // Edge case
        return 0;
    }

    return negative ? result * -1 : result;
}