/*
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
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