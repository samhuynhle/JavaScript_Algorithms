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
    var carry = 0;
    var ret = new ListNode(0);
    var cur = ret;
    if(l1.val == 0){
        return l2;
    }
    if(l2.val == 0){
        return l1;
    }
    while(l1 && l2){
        var sum = l1.val + l2.val + carry;
        if(carry == 1){
            carry = 0;
        }
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }
        cur.next = new ListNode(sum);
        sum = 0;
        l1 = l1.next;
        l2 = l2.next;
        cur = cur.next;
    }
    if(l1){
        sum = l1.val;
    }
    if(l2){
        sum = l2.val;
    }
    if(carry += 1){
        sum += carry;
        carry = 0;
    }
    if(sum >= 10){
        carry = 1;
        sum = sum - 10;
    } else {
        cur.next = new ListNode(sum);
        cur = cur.next;
    }
    if(carry == 1){
        cur.next = new ListNode(carry);
    }
    return ret.next;
};