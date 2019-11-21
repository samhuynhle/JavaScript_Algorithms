/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) { // Main function to create the return array and call the initial function of the recursive function
    var ret = []; // We will store the values of the nodes where and return this list
    traversal(root, ret); // Pass into the traversal function the tree (root node) and the array
    return ret;
};

var traversal = function(node, array) { // Takes in any Node and array
    if(!node){ // If the node is null, return null
        return null;
    } else { // otherwise store the value of the node and then call the function for the children, the function will be called on each left most child first then recurse back
        array.push(node.val);
        for(var child of node.children){
            traversal(child, array);
        }
    }
    return array;
}