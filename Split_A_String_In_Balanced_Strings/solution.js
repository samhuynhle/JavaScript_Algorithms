var balancedStringSplit = function(s) { // function takes in a string of L's and R's
    count = 0;
    balance = 0; // this will be we know we found the balance equal amounts of L's and R's in relation to each other (similar to valid parens)
    for(var schar of s){
        if(schar == 'L'){
            balance++;
        } else {
            balance--;
        }
        if(balance == 0){ // every time we hit a zero, we know we found a balance sequence of L's and R's
            count ++;
        }
    }
    return count;
};