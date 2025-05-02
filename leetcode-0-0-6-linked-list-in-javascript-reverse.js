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

const reverseListIteratively = function(head) {
    let newList = null;
    let current = head;

    while (current !== null) {
        const nextNode = current.next;
        current.next = newList;
        newList = current
        current = nextNode;
    }

    return newList;
};

const reverseListRecursively = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};