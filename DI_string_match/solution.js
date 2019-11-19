// Unoptimized solution

var diStringMatch = function(S) {
    var N = S.length + 1; 
    var array1 = Array.apply(null, {length: N}).map(Number.call, Number);
    var array2 = [];
    
    for(var schar of S){
        if(schar === "I"){
            array2.push(array1.shift());
        } else {
            array2.push(array1.pop());
        }
    }
    
    array2.push(array1.pop());
    
    return array2;
};

// Optimized Solution from discussions section

var diStringMatch = function(S) {
    let perm = [];
    let I = 0;
    let D = S.length;
    
    for (let j = 0; j < S.length; j++) {
        if (S[j] == "I") {
            perm.push(I);
            I++;
        } else if (S[j] == "D") {
            perm.push(D);
            D--;
        }
    }
    
    perm.push(I);
    return perm;
};