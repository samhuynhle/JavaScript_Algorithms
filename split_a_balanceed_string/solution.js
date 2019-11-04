var balancedStringSplit = function(s) {
    count = 0;
    balance = 0;
    for(var schar of s){
        if(schar == 'L'){
            balance++;
        } else {
            balance--;
        }
        if(balance == 0){
            count ++;
        }
    }
    return count;
};