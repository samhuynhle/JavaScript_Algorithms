// Unoptimized solution

var diStringMatch = function(S) {
    var N = S.length + 1; // This is the length of the string plus one, we will need to go to this total for the loop
    var array1 = Array.apply(null, {length: N}).map(Number.call, Number); // this creates an empty array that is of
    // size N and then the .map() function will fill the array with numbers upto the size starting from 0
    // This will mangage the available numbers we have to push into the returning array
    var array2 = []; // this is our return
    
    for(var schar of S){ // we wil sift through each character of S
        if(schar === "I"){ // If S is I then we need the next item to be an increase of this number, thus we will push 0
            array2.push(array1.shift()); // this will push the lowest number from the array we created
        } else {
            array2.push(array1.pop()); // this will push the highest number from teh array we created
        }
    }
    
    array2.push(array1.pop()); // this will push the last number we have in our array
    
    return array2; // we return this one
};

// Optimized Solution from discussions section
// This solution is more optimized as we don't use a second array, we work with the value of I starting at 0 and then the
// value of D starting at the maximum we can get. We close in as we push to the returning array.

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