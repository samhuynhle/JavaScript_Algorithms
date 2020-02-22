/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    
    var prev = null;
    var curr = head;
    
    while(curr != null){
        temp = curr.next
        curr.next = prev
        
        prev = curr
        curr = temp
    }
    
    return prev
};