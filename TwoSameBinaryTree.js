//Check to see if two binary trees are same

// first check if nodes are null/ not
//

class Node{
  constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
  }
   
}

function isIdentical(node1, node2){
    //return false if both are empty
    if(!node1.data && !node2.data){
         return 1;   
    }
    //return false if one empty
    if(!node1.data || !node2.data){
        return 1;
    }
    // check if root data are same, left node of both tree are same, right node of both tree are same
    if(node1.data , node2.data){
        return (node1.data === node2.data)&& isIdentical(node1.left, node2.left)&& isIdentical(node1.right, node2.right)       
    }
    return 0;

}
const root1 = new Node(10);
root1.left = 2;
root1.right = 5;
console.log(root1);

const root2 = new Node(10);
root2.left = 4;
root2.right = 6;

console.log(root2);

console.log(isIdentical(root1, root2));