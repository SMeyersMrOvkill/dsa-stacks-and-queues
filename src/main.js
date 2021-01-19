const Stack = require('./stack');
const Queue = require('./queue');

let starTrek = new Stack();
console.log('Is empty before any elements have been inserted:', starTrek.isEmpty());
console.log('First element while Stack is empty:', starTrek.peek());
starTrek.push('Kirk');
console.log('First element after inserting element "Kirk":', starTrek.peek());
console.log('Is empty after one element has been inserted:', starTrek.isEmpty());
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
console.log('Is empty after all elements are inserted:', starTrek.isEmpty());

starTrek.display();

starTrek = new Queue();
console.log('Is empty before any elements have been inserted:', starTrek.isEmpty());
console.log('First element while Stack is empty:', starTrek.peek());
starTrek.enqueue('Kirk');
console.log('First element after inserting element "Kirk":', starTrek.peek());
console.log('Is empty after one element has been inserted:', starTrek.isEmpty());
starTrek.enqueue('Spock');
starTrek.enqueue('McCoy');
starTrek.enqueue('Scotty');
console.log('Is empty after all elements are inserted:', starTrek.isEmpty());

starTrek.display();