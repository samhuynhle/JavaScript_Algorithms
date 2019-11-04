var rangeSumBST = function(root, L, R) {
    var sum = 0;
    sum = findSum(root, L, R, sum);
    return sum;
}
    
var findSum = function(root, L, R, sum) {
    if(root == null){
        return 0;
    }
    if(L <= root.val && root.val <= R){
        sum += root.val;
    }
    if(root.left){
        sum += rangeSumBST(root.left, L, R);
    }
    if(root.right){
        sum += rangeSumBST(root.right, L, R);
    }
    return sum;
};    