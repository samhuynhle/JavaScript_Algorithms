/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Definition of linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0) 
    let curr = dummyHead 
    let carry = 0 
    while(l1 != null || l2 != null) { 
        sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0) 
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10) 
        curr = curr.next
        l1 = (l1 ? l1.next : l1) 
        l2 = (l2 ? l2.next : l2) 
    }
    if(carry > 0) {
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
};

/*
    Establish a dummy head to keep track of the return list. We'll take sums and add it to this list.
    Establish a current runner and also a variable to store a "carry over" value.

    We will loop through the two lists together; since we start at the one's, then ten's, then hundred's etc.
    We get our sum value by adding the carry (it'll be default 0) plus if the node at l1 is valid and plus if the node at l2 is valid (both default to 0).
    We estbalish our carry by getting the modulo 10 of the sum (either 1 or 0 at this point)
    move our curr marker to .next (should be null); If we have more items in our list we'll reassign it to the sum
    We advance our l1 and l2 markers if and noly if they are currently at valid nodes
    We only exit our while loop of both the l1 and l2 markers have reached null

    Once out of our while loop we add to our list a carry if we leave the while loop with a carry value
*/