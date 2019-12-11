/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number[]}
 */

 // Post Order Traversal is DFS that goes node then children (left to right), in tree's left child then right child

var postorder = function(root) { // main function to do the first call
    var ret = []; // this array will store the values of the nodes we visit
    traversal(root, ret); // pass into traversal function the node and also the ret array
    return ret; // return after all recursive calls complete
};

var traversal = function(node, array) {
    if(!node){ // if the node is not null we will continue the recursive calls
        return null; // if the node is null we return null and this will go back to the last call
    } else { 
        for(var child of node.children){ // if the node exists then we check for children
            traversal(child, array); // each children node will be used as node for the traversal call
        }
        array.push(node.val); // Since this is post order we will push the node afte we inspected the all the children
    }
    return array;
}