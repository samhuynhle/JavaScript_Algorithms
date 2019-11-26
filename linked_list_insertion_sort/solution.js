function insertionSortList(head) {
    // Set up a another linked list
    var before = { val: -Number.MAX_VALUE, next: null };
    
    //traverse the input list
    while (head) {

        var prev = before; // We need to keep a marker for the previous node we that we will be working with for each iteration
        
        while (prev.next && prev.next.val < head.val) {
            // if the new list has a current node and the next value is < the head value, we will be adding it to the end of the new list
            prev = prev.next;
        }
        
        // set up a new node to store the head's next value
        var next = head.next;

        // set the head's next to the current previous node's next
        head.next = prev.next;

        // set the current previous next to the current node we are working with
        prev.next = head;

        // move the head forward within the input list
        head = next;
    }
    
    return before.next;
}