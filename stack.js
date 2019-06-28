// Stack - ordered list
//principle - first in last out

// push method, pop method, peek method

//push method - add data to the very last index

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [];
    }
    push(record){
        this.data.push();
    }
    pop(){
        return this.data.remove()
    }

    peek(){
        return this.data[this.data.length-1];
    }
}

const stack1 = new Stack();
const stack2 = new Stack();

stack1.push("Hi");
stack1.push("There");

stack2.push(1);
stack2.push(2);

class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record){
         this.first.push(record);
         
    }
    remove(){
        while(this.first.peek()){
            const fRecord = this.first.pop();
            this.second.push(fRecord);
        }
        const record = this.second.pop();

        while(this.second.peek()){
            const sRecord = this.second.pop();
            this.first.push(sRecord);
        }
        return record;
    }
    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        while(this.second.peek()){
            this.first.push(this.second.pop());
        }
        return record;
    }
}

