/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var prev = null;
    var current = head;
    var next = null;
    
    if(m == n){
        return head;
    }
    var count = 1;
    while (count <= n){

        while(m <= count && count <= n){
            if(count == m){
                var rPrevious = prev;
                var rStart = current;
            }
            if(count == n){
                var rNext = current.next;
                var rEnd = current;
            }
            console.log(count);
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if(current == null)
            {
                break;
            }
        prev = current;
        current = current.next
        count++;
    }
    if(rPrevious){
        rPrevious.next = rEnd;
    } else {
        head = rEnd;
    }
    rStart.next = rNext;
    return head;
};