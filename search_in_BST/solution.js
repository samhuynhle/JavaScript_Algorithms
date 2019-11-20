/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// Not optimized BFS (Graph Approach), not optimized for BST's
var searchBST = function(root, val) {
    var stack = [];
    var set = new Set();
    
    stack.push(root);
    
    while(stack.length > 0){
        var P = stack.pop();
        if(P.val == val){
            return P;
        }
        if(P.left && !set.has(P.left)){
            stack.push(P.left);
        }
        if(P.right && !set.has(P.right)){
            stack.push(P.right);
        }
    }
    return null;
};

// Optimized solution for BST's

var searchBST = function(root, val) {
    if(root == null){ // base case to return null
        return null;
    }
    if(root.val == val){ // base case to return if found
        return root;
    }
    if(root.val > val){ // recursive call, utlizing BST properties, left will be less than, so just check left
        return searchBST(root.left, val);
    }
    else {
        return searchBST(root.right, val); // recursive call, utilizing BST properties, right will be greater than, so just check right
    }
    return new TreeNode(null); // You here, return empty node
}

// Even more optimized

var searchBST = function(root, val) {
    if(root == null){ // base case to return null
        return null;
    }
    if(root.val == val){ // base case to return if found
        return root;
    }
    if(root.val > val){ // recursive call, utlizing BST properties, left will be less than, so just check left
        return searchBST(root.left, val);
    }
    else {
        return searchBST(root.right, val); // recursive call, utilizing BST properties, right will be greater than, so just check right
    }
    return null; // Just return null, no need to create a new node
}