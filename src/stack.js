class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        return this.top !== null ? this.top.data : null;
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        let result = [];
        let node = this.top;
        while(node !== null) {
            result.push(node.data);
            node = node.next;
        }
        console.log(result.join(', '));
    }
}

module.exports = Stack;