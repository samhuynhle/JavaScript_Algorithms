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
    let dummyHead = new ListNode(0) // We are establishing a dummy head so we can return the next
    let curr = dummyHead // we will establish a current runner to keep adding to our list
    let carry = 0 // need to be able to store carry value
    while(l1 != null || l2 != null) { // our conditional is if we have any values in l1 or l2
        sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0) // our sum will be equal to the carrry plus l1 or l2 value if they exist
        carry = Math.floor(sum / 10) // the carry will be 1 if the sum is > 10, will be 0 if less than 10
        curr.next = new ListNode(sum % 10) // adding the sum, will always reduce to single digit, the carry is already stored if needed
        curr = curr.next // advance our curr runner
        l1 = (l1 ? l1.next : l1) // if l1 is valid then move to the next
        l2 = (l2 ? l2.next : l2) // if l2 is valid then move to the next
    }
    if(carry > 0) { // if we have a carry, add to the end
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
};