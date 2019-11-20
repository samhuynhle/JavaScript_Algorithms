var isSameTree = function(p, q){ // this function takes two nodes to check if they are the same tree
    if(p == null && q == null){ // if both nodes are null, you are at a leaf node
        return true
    }
    if(p == null && q){ // if one of the nodes are null but the other exist during one of the recursive calls or first one, then they are not same tree
        return false;
    }
    if(p && q == null){ // another false throw, same as above but for other node
        return false;
    }
    if(p.val != q.val){ // another false throw, if they don't match
        return false;
    }
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)); // We are going to return true when we reach this and the first condition our true base case is met
};

// We are going through each node of the tree's together comparing current, then left and then right branches