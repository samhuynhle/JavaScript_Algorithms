function insertionSortList(head) {
    // Set up a 'dummy' node that will always be in the front of the linked list
    var before = { val: -Number.MAX_VALUE, next: null };
    
    // if the inputted linked list is valid this loop will keep going, will traverse each node
    while (head) {

        // Here we set a runner at the start of the the new linked list
        var prev = before;
        
        // Here we look for the position of where the current node in the inputted linked list should be inserted
        // For the first instance, prev will not have a .next as it's null
        // This will break when either prev is null or if prev's next is greater than head
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        
        // this is a temp variable we will be using to move the runner within the inputted linked list
        var next = head.next;

        // head.next will be assigned to prev.next, since prev.next will be greater than head
        head.next = prev.next;
        
        // prev.next will be assigned to head now
        prev.next = head;

        // we move head back to the next node within the linked list
        head = next;
    }
    
    return before.next;
}