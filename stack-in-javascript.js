// Stack is LIFO - Last In First Out
// JavaScript already has its own native realisation of Stack as .push / .pop methods of Array

// It is also possible to realise Stack as LinkedList, here is how to do this
// Stack as LinkedList: 

class Node {
    constructor(data, prev) {
        this.data = data;
        this.prev = prev;
    }
}

class Stack {
    constructor() {
        this.last = null;
    }

    push(data) {
        this.last = new Node(data, this.last);
    }

    pop() {
        let result;
        if (this.last !== null) {
            result = this.last.data;
            this.last = this.last.prev;
        }
        return result;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);

stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // undefined