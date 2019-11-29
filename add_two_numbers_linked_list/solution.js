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