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

const partition = function(head, x) {
    let left = new ListNode();
    let right = new ListNode();
    let ltail = left;
    let rtail = right;


    while (head !== null) {
        if (head.val < x) {
            ltail.next = head;
            ltail = ltail.next;
        } else {
            rtail.next = head;
            rtail = rtail.next;
        }

        head = head.next;
    }

    ltail.next = right.next;
    rtail.next = null;
    return left.next;
};




// The best description of solution is here: https://www.youtube.com/watch?v=KT1iUciJr4g