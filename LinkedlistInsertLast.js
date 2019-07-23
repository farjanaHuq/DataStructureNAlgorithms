class Node{
    constructor(data, next = null){
       this.data = data;
    }

    insertLast(data){
        if(!this.head){
            return null;
        }
        let node = this.head;
        let lastNode = null;

        while(node){      
            if(!node.next){
                node.next = new Node(data);
            }
            else{
                node.data = new Node(data);
            }
            temp = temp.next;

        }

    }
}