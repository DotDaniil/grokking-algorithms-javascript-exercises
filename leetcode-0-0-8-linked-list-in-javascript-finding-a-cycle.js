class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }


    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }

}

const hasCycle = (head) => {
    let pointer1 = head;
    let pointer2 = head;

    while (pointer2 && pointer2.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;

        if (pointer1 === pointer2) {
            return true;
        }


    }

    return false
};

// The best description of solution is here: https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
// Floyd’s slow and fast pointers algorithm: https://www.geeksforgeeks.org/how-does-floyds-slow-and-fast-pointers-approach-work/