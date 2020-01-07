
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var mergeTrees = function(t1, t2) { // we will be merging t2 into t1 and return t1
    if (!t1 && !t2) return null; // Base Case --> If both nodes are null return null, there's nothing to add
    if (!t1 || !t2) return t1 || t2; // Base Case 2 --> If one of the nodes are null, return the not null node, will add as child
    
    t1.val += t2.val; // Base Case 3 --> If both nodes present, we add the values and store in t1

    // Recursive call for the children on the left, then children on the right. We'll end up going to left most child first
    t1.left = mergeTrees(t1.left, t2.left); // recursive call for left children of the two trees
    t1.right = mergeTrees(t1.right, t2.right); // recursive call for right children of the two trees
    
    return t1; // return first tree after all nodes valid nodes have been visited
  };