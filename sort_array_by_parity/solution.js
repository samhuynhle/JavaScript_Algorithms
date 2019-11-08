var sortArrayByParity = function(A) {
    var rightInt = A.length - 1;
    var leftInt = 0;
    while(leftInt < rightInt){
        while(A[leftInt] % 2 == 0){
            leftInt++;
        }
        while(A[rightInt] % 2 == 1){
            rightInt--;
        }
        
        if(leftInt < rightInt){
            var temp = A[leftInt];
            A[leftInt] = A[rightInt];
            A[rightInt] = temp;
        }
    }
    return A;
};