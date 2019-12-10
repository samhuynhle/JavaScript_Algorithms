var reverseList = function(head) {
    var prev = null;
    var current = head;
    var next = null;

    while (current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return head;
};