var rangeSumBST = function(root, L, R) { // we are giving a root node and also a two integers indicating a range for numbers we will add up
    var sum = 0; // initialize the sum to 0
    sum = findSum(root, L, R, sum); // use helper function to traverse and add
    return sum;
}
    
var findSum = function(root, L, R, sum) { // we will be using pre-order traversal checking the current nodes, then the left nodes and then right nodes
    if(root == null){ // if null we return 0
        return 0;
    }
    if(L <= root.val && root.val <= R){ // this is for the current node we are at
        sum += root.val;
    }
    if(root.left){ // if there's a left we use the function to recusively call this function
        sum += rangeSumBST(root.left, L, R); 
    }
    if(root.right){
        sum += rangeSumBST(root.right, L, R); // if there's a right we use this to recursively call this function
    }
    return sum; // return the sum
};    