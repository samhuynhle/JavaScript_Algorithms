/*

Definition for a binary tree node.
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
*/

/*
    @param {TreeNode} root
    @param {number} val
    @return {TreeNode}
*/

// Not optimized BFS (Graph Approach), not optimized for Binary Search Tree's
// This is regular BFS where we all all the nodes into our search
// For BST's we can use binary search methodology (go left or right on condition of current val and val)
var searchBST_BFS = (root, val) => {
    var queue = []
    var flagger = new Set()

    queue.push(root);

    while(queue.length > 0){
        var current = queue.pop();
        if(current.val == val) {
            return current;
        }
        if(current.left && !flagger.has(current.left)){
            queue.push(current.left)
        }
        if(current.right && !flagger.has(current.right)){
            queue.push(current.right)
        }
    }

    return null
}

// Optimized solution for BST's using DFS via recursion's call stack

var searchBST = function(root, val) {
    if(root == null){
        return null;
    }
    if(root.val == val){
        return root;
    }
    if(root.val > val){
        return searchBST(root.left, val);
    }
    else {
        return searchBST(root.right, val);
    }
    return null;
}