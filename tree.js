// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

const newNode = new Node('a');
newNode.add('b', [1, 2, 3]);
newNode.add('d');
newNode.add('c');

console.log(newNode);

class Tree {
    constructor() {
        this.root = null;
    }
    //Breadth first traversal method
    traverseBF(fn) {
        //iterate through the node
        //keep the children in array and remove parent
        //remove the next parent node and push the children into the current array
        //continue iteration until you find the last child (that means the length of array is 0)

        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            for (let child of node.children) {
                arr.push(child);
            }
            //alternate method to iterate through the children and push to the array is 
            // arr.push(...node.children)
            fn(node);
        }
    }
    //Depth first traversal method
    traverseDF(fn) {
        //
         const arr = [this.root];
         while(arr.length){
             const node = arr.shift();
             for(let child of node.children){
                 arr.unshift(child);            
             }
             fn(node);
         }
    }
}


