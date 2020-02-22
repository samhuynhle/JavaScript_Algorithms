/*

Definition for singly-linked list.
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
*/

/*
    @param {ListNode} head
    @return {ListNode}
*/

// Iterative Approach below using while loop
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

// Recursive Approach below
var reverseListR = (head) => {
    if (head == null || head.next == null) {
        return head;
    }

    var p = reverseListR(head.next);
    head.next.next = head;
    head.next = null;
    return p
}