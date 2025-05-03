// Stack is FIFO - Fist In First Out
// JavaScript already has its own native realisation of Queue as .unshift / .pop methods of Array

// It is also possible to realise Queue as LinkedList, here is how to do this
// Queue as LinkedList:

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;  // Front of the queue (oldest element)
        this.tail = null;  // Back of the queue (newest element)
    }

    push(data) {
        const newNode = new Node(data);

        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    pop() {
        if (this.head === null) {
            return undefined;
        }

        const removedNode = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        return removedNode.data;
    }

}


const queue = new Queue();
queue.push(1);
queue.push(2);

queue.pop(); // 1
queue.pop(); // 2
queue.pop(); // undefined