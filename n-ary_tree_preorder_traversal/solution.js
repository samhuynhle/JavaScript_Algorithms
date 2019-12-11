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

// Pre order traversal is where we vist the root then travel left and then right, a form of DFS.

//Recursive Solution
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

// Iterative Solution
var preorder2 = function(root) {
    var curr = root;
    var stack = []; // This is the stack we will use to ensure we have visited every node
    var result = []; // This is our return

    while(curr != null){
        result.push(curr.val);
        // for the current node we will look at the children. We need to reverse the children before we insert into the stack because the first child
        // left most will need to be added into our stack last for each node we visit. We then add onto the stack the left most children's children
        curr.children.reverse().map(ele => stack.push(ele));
        curr = stack.pop(); // Then we take the top most and assgn curr to it for the next iteration
    }

    return result;
};