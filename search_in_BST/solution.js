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

