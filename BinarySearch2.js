// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data<this.data && this.left){
            this.left.insert(data);
        }
        else if(data < this.data){
            this.left = new Node(data)
        }
        else if(data > this.data && this.right){
            this.right.insert(data);
        }
        else if(data > this.data){
            this.right = new Node(data);
        }
    }
    contain(data){
       //check to see the data > or < parent node
       //if data < parent node ---> left node, else if ---> right node
       // else if the value same return data vlaue
       if(this.data === data){
           return this;
       }
       else if(data < this.data && this.left){
           return this.left.contains(data);
       }
       else if(data > this.data && this.left){
          return this.right.contains(data);
       }
       else return null;
    }
}

//sum of leaf nodes

function sumLeaf(node){
     //iterate through left while left node is null
     var leafArr = [];
     if(node.data === null){
         return 0;
     }
     while(!node.left){
       leafArr.push(node.left)

     }
}