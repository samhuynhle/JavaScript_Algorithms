/*
@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}
*/

// Definition of linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
Add two numbers: Core concepts; we have two integers represented at linked lists.
Single digits in first node and increases as goes.

We'll traverse the lists up until the end of the lists, then return a new list resulting from the sum.

Note for carried numbers for when a sum of two digits is greater than 10.
*/

var addTwoNumbers = function(l1, l2) {

    // We need a dummy linked list so we can return our final result. It'll be dummyHead's next.
    let dummyHead = new ListNode(0)
    let curr = dummyHead

    // We'll have carry be an integer it'll only be 1's when we reach the condition.
    let carry = 0

    // This is our main loop for the function
    while(l1 != null || l2 != null) {
        sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0) // our sum will be equal to the carrry plus l1 or l2 value if they exist
        carry = Math.floor(sum / 10) // the carry will be 1 if the sum is > 10, will be 0 if less than 10
        curr.next = new ListNode(sum % 10) // adding the sum, will always reduce to single digit, the carry is already stored if needed
        curr = curr.next // advance our curr runner

        // Use ternary conditions to really navigate the linked lists. Only will advance when we are on a valid node (aka has a .next)
        l1 = (l1 ? l1.next : l1) // if l1 is valid then move to the next
        l2 = (l2 ? l2.next : l2) // if l2 is valid then move to the next
    }
    if(carry > 0) { // if we have a carry, add to the end
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
};