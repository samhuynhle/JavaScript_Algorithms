function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function(p, q){ // function takes two nodes that are potentially trees
    if(p && q){ // this is our base case for the recursive call, if both nodes are valid
        if(p.val != q.val){ // if the value of p and q are not the same, then return false the tree is not the same
        return false;
        }
        else{ // if they are the same value then we check their children if they have any
            console.log(p.val, q.val);
            if(isSameTree(p.left, q.left) && isSameTree(p.right, q.right)){ // here we do a recursive call checking the left and right branchs of our node
                return true; // if they are the same, all return trues, we return true
            } else {
                return false;
            }
        }
    }
    if(p == null && q){ // base cases, one is null
        return false;
    }
    if(p && q == null){ // base cases, one is null
        return false;
    }
    if(p == null && q == null){ // base cases, both null
        return true
    }
};
