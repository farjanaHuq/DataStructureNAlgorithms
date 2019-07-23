
//Linked class have one property inside it, i.e 'head'
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
  
}

class LinkedList {
   constructor(){
       this.head = null;
   }
   insertFirst(data){
    this.head = new Node(data, this.head);
   }

   size() {
    var count = 0;
    let temp = this.head;
     while(temp){
        count++;
        temp = temp.next;
     }
     return count;
   }

   getFirst(){
    let node = this.head;
    return node;
   }

   getLast(){
    if(!this.head){
        return null;
    }
    let temp = this.head;
    while(temp){
        if(!temp.next){
            return temp;
        }
        temp = temp.next;      
        }
    return temp;
   }

   clear(){
       this.head = null;
       return this.head;
   }
   removeFirst(){
       if(!this.head){
            return null;
        }

       let firstNode = this.getFirst();
       firstNode = null;
       let node = this.head;
       node = node.next;
       return node;
   }

   removeLast(){
    if(!this.head && this.size===1){
        return null;
    }
    // let lastNode = this.getLast();
    //  lastNode = null;
    let temp = this.head;
    let node = this.head.next;
    while(node.next){     
        temp = node;
        node = node.next;    
    }
    temp.next = null;
    console.log(node, "has been removed.");
    return this.head;
     
   }

   insertLast(data){
       if(!this.head){
           return null;
       }
       let lastNode = this.getLast();
       if(lastNode){
            //There is some existing node in the LIkned list
            lastNode.next = new Node(data);
       }
       else{
           //The chain is empty
           this.head = new Node(data);
       }
   }

   getAt(index){
    //    if(!this.head){
    //        return null;
    //    }
       let counter = 0;
       let node = this.head;
       while(node){
           if(counter ===index){
               return node;
           }
           counter++;
           node = node.next;
       }
       return null;
   }
   removeAt(index){
       if(!this.head){
           return null;
       }
       if(this.index === 0){
        this.head = this.head.next;
        return;
       }
       let previous= this.getAt(index-1);
       if(!previous || !previous.next){
           return;
       }
       previous.next = previous.next.next;
       let node = this.head;    
      return node;
   }

   insertAt(data, index){
      if(!this.head){
        this.head = new Node(data);
        return ;
      }
      if(index === 0){
        this.head = new Node(data, this.head);
        return ;
      }
      
      let previousNode= this.getAt(index-1) || this.getLast();
      let newNode = new Node(data,previousNode.next);
     
      previousNode.next = newNode;
      
      let node = this.head;
      return node;
   }
  
   forEach(fn){
    let node = this.head;
    let counter = 0;

    while(node){
        fn(node, counter);
        node = node.next;
        counter++;
    }
   }

   *[Symbol.iterator](){
       let node = this.head;
       while(node){
           yield node;
           node = node.next;
       }
   }
}

function midpoint(list){
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Given a linked list that return true if it is circular, false if it is not.

function circularList(list){
     let slow = list.getFirst(); //list.head
     let fast = list.getFirst();
     
     while(fast.next&&fast.next.next){
         slow = slow.next;
         fast = fast.next.next;

         if(slow === fast){
             return true;
         }
     }

}


const nodeOne = new Node(5)
const list = new LinkedList();
// console.log(list.head);
list.head = nodeOne;
list.insertFirst(15);
list.insertFirst(20);
list.insertLast(25);
list.size();

console.log(midpoint(list))
// list.insertAt(10, 2);

// console.log(list.clear());
// console.log(list.insertAt(10, 2));
// console.log(list);


module.export = {Node, LinkedList};