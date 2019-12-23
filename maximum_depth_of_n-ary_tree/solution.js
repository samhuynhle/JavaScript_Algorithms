/*
Definition for a Node.
function Node(val,children) {
    this.val = val;
    this.children = children;
};
*/

/*
@param {Node} root
@return {number}
*/

/*

main function is maxDepth(), which takes in a node that has a list of children(children is currently stored in an array)
depthSearch() is a function that takes in the parent node's depth and the current node
our main function is using ternary for the return we return either the depth we find or 0.

Within helper function, we are incrementing the depth if this function was called (meaining we successfully passed in a node).
Then we store a maximum value as we analyze the children nodes in a for loop.
We then call depthSearch again for each of those children.
This function returns the maximum of each path. This is very similar to pre-order traversal(DFS) algorithm.

*/
var maxDepth = function(root) {
    return root ? depthSearch(0, root) : 0;
};

function depthSearch(parentDepth, node) {
    const nodeDepth = parentDepth + 1;
    let maximum = nodeDepth;
    for (let child of node.children) {
        maximum = Math.max(maximum, depthSearch(nodeDepth, child));
    }
    return maximum;
}