//Queue- is a container of source where records or pieces of data enter from ine side and exit from the other. 
//First come first out principle
//the process of adding data is adding a queue -> array.unshift()
//removing the first record -> array.pop()

//Queue is like taking some helper functions of an array, and do not use it as ana array


// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor(){
        this.data = [];
    }
    add(record){
         this.data.unshift(record);
         
    }
    remove(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
}



// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
       const q = new Queue();

       while((sourceOne.peek()|| sourceTwo.peek())){
           if(sourceOne.peek()){
               q.add(sourceOne.remove());
           }
           if(sourceTwo.peek()){
               q.add(sourceTwo.remove());
           }
       }
       console.log(q);
    return q;
}

const sourceOne = new Queue();
sourceOne.add(1);
sourceOne.add(2);

const sourceTwo = new Queue();
sourceTwo.add('Hi');
sourceTwo.add('There');
weave(sourceOne, sourceTwo);